import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import "./api.css";
const Api = ({ alldata, removedata }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const offset = currentPage * itemsPerPage;
  const currentItems = alldata.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(alldata.length / itemsPerPage);
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  const remove = (id) => {
    const rmv = alldata.filter((remove) => remove.id !== id);
    removedata(rmv);
    console.log(id, "Removed the data................");
  };
  return (
    <>
      <div className='main-card'>
        {currentItems?.length > 0 ? currentItems.map((album, index) =>
          <div className='data-card' key={index}>
            <div className='title-div' style={{ textAlign: "center" }}>
              <p>{album.title}</p>
            </div>
            <div className='btn-div' style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
              <Link
                to={`/updatealbum/${album?.id}/${album?.userId}/${album?.title.split(" ").join("")}`}
                style={{
                  backgroundColor: "gray",
                  padding: "3px",
                  color: "white",
                  textDecoration: "none",
                  width: "110px",
                  textAlign: "center",
                  borderRadius: "2px"
                }}
              >
                Update
              </Link>
              <button className='rmvbtn' onClick={() => remove(album.id)}>Delete</button>
            </div>
          </div>
        ) : "No Data Found"}
      </div>
      <div className='pagination-div'>
      {alldata.length > itemsPerPage && (
        <ReactPaginate 
          previousLabel={'← Previous'}
          nextLabel={'Next →'}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          previousLinkClassName
          nextLinkClassName
          disabledClassName
          activeClassName
        />
      )}
      </div>
    </>
  );
};
export default Api;
