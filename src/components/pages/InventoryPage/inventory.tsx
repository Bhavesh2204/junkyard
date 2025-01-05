import CardContainer from '../../CardContainer/cardcontainer';
import FilterBar from '../../All_Products/AllProducts';
import CarProduct from '../../All_Products/CarProduct';
import Spares from '../Spareparts';

const Inventory: React.FC = () => {
    return (
    <>  
        
        <CardContainer/>

            <div  id="inventory" className="horizontal-text-box">
                <div className="horizontal-text">INVENTORY</div>
            </div>

        <FilterBar/>

            <div id="car-section" className="horizontal-text-box">
                <div className="horizontal-text">Junk Cars</div>
            </div>
               
        <CarProduct/>

            <div id="spare-parts-section" className="horizontal-text-box">
                <div className="horizontal-text">Spare Parts</div>
            </div>

         <Spares/>

            <style>
                {`
            .horizontal-text-box {
                    width: 100%;
                    height: 130px;
                    background-color: rgb(15 23 42);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 2px;
                    position: relative;
                }
              
                .horizontal-text {
                    color: white;
                    font-size: 60px;
                    font-weight: 900;
                    margin-left: 60px; /* Space for the icon */
                }
                     `}
            </style>
            
    </>
  );
};

export default Inventory;
