import React from 'react'

const CardMain = ({url, titulo}) => {
  return (
    <>
        <div className="card card-pcpal entrecard card-flex" >
            <div className="row g-0">
                <div className="col-md-4">
                <img src={url} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <p className="card-title font-merienda">{titulo}</p>
                </div>
                </div>
            </div>
        </div>    
    </>
  );
};

export default CardMain;