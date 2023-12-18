import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const ListView = ({openModal}) => {
  const state = useSelector((store) => store.flight);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = state.flights.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(state.flights.length / itemsPerPage);

  const handlePageClick = (event) => {
    console.log(event);
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-hover mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => openModal(flight.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        breakLabel="..."
        nextLabel="ileri >"
        className="pagination"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< geri"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ListView;
