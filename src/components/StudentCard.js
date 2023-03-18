import '../style.css';
import { Grid, Image} from 'semantic-ui-react'
import logo from './images/download.jpg';
import data from "./data/data.json"; //importing data from json file

const StudentCard = () => { 
  return( 
    // using react semantic UI Lib to create Grid
    <Grid className='card-container'>
        <Grid.Row className="first-section">
               <div className='card-title'>
                   <h1 className='title'>Student Card</h1>
               </div>
              
               <Image src={logo}  className='logo' />
         
        </Grid.Row>
    
        <Grid.Row className="second-section">
            {/* populate data into elements */}
            <Image src={data.picture} className='stundent-picture'/>
          
            <div className='student-details'>
             <h1 className='details'>{data.name}</h1>
             <h1 className='details'>Student ID: {data.studentID}</h1>
             <h2 className='details'>{data.department}</h2>
             <h2 className='details'>{data.status}</h2>
             <h2 className='details'>Expires: {data.valit_until}</h2>
             </div>
        </Grid.Row>
        <Grid.Row className="third-section">
            <Image src={data.barcode} className="barcode-image"/>
        </Grid.Row>
      </Grid>   
    )
  };
export default StudentCard;



