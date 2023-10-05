import React from 'react';

function BookTable() {
    return (
       
            <div className="book-table">
                <h4 className="title3" itemprop="headline">
                    <span className="sudo-bottom sudo-bg-red">Book</span> This Restaurant Table
                </h4>
                <form>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="input-field brd-rd2">
                                <i className="fa fa-user"></i> <input type="text" placeholder="NAME" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="input-field brd-rd2">
                                <i className="fa fa-phone"></i> <input type="text" placeholder="PHONE" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="select-wrp2">
                                <select>
                                    <option>Questions</option>
                                    <option>Questions No 1</option>
                                    <option>Questions No 2</option>
                                    <option>Questions No 3</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="input-field brd-rd2">
                                <i className="fa fa-envelope"></i> <input type="email" placeholder="EMAIL" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="input-field brd-rd2">
                                <i className="fa fa-calendar"></i> <input className="datepicker" type="text" placeholder="SELECT DATE" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-lg-6">
                            <div className="input-field brd-rd2">
                                <i className="fa fa-clock-o"></i> <input className="timepicker" type="text" placeholder="SELECT Time" />
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <div className="textarea-field brd-rd2">
                                <i className="fa fa-pencil"></i> <textarea placeholder="Your Instruction"></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12">
                            <button className="brd-rd2 red-bg" type="submit">POST PREVIEW</button>
                        </div>
                    </div>
                </form>
            </div>
      
    );
}

export default BookTable;
