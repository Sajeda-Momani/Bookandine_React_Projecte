import React from 'react';

function Pagination() {
    return (
        <div className="pagination-wrapper text-center">
            <ul className="pagination justify-content-center">
                <li className="page-item prev"><a className="page-link brd-rd2" href="#" itemprop="url">PREVIOUS</a></li>
                <li className="page-item"><a className="page-link brd-rd2" href="#" itemprop="url">1</a></li>
                <li className="page-item"><a className="page-link brd-rd2" href="#" itemprop="url">2</a></li>
                <li className="page-item active"><span className="page-link brd-rd2">3</span></li>
                <li className="page-item"><a className="page-link brd-rd2" href="#" itemprop="url">4</a></li>
                <li className="page-item"><a className="page-link brd-rd2" href="#" itemprop="url">5</a></li>
                <li className="page-item">........</li>
                <li className="page-item"><a className="page-link brd-rd2" href="#" itemprop="url">18</a></li>
                <li className="page-item next"><a className="page-link brd-rd2" href="#" itemprop="url">NEXT</a></li>
            </ul>
        </div>
    );
}

export default Pagination;
