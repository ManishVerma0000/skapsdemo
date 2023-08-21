// import React from 'react';
// import '../app/custom.css'

// const TableExample = () => {
//     return (
//         <table className='tableheight'>
//             <thead>
//                 <tr>
//                     {/* <th>TODAYS DATE</th>
//                     <th>Age</th> */}

//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td className='tabedata' style={{fontSize: 70,}}>TODAYS DATE</td>
//                     <td style={{fontSize: 70 ,border:2 }} className='tablecontent'>30</td>

//                 </tr>
//                 <tr>
//                 <td className='tabedata' style={{fontSize: 70,}}>TODAYS DATE</td>
//                     <td style={{fontSize: 70,}}>30</td>

//                 </tr>
//                 <tr>
//                 <td className='tabedata' style={{fontSize: 70,}}>TODAYS DATE</td>
//                     <td style={{fontSize: 70,}}>30</td>
//                 </tr>
//                 <tr>
//                 <td className='tabedata' style={{fontSize: 70,}}>TODAYS DATE</td>
//                     <td style={{fontSize: 70,}}>30</td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// };

// export default TableExample



import React from 'react';
import '../app/custom.css'

const TableExample = () => {
  return (
    <table className="table">
      <thead>
        <tr>
     
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{fontSize: 70,}} >John Doe</td>
          <td style={{fontSize: 70,}}>30</td>
        
        </tr>
        <tr>
          <td style={{fontSize: 70,}}>Jane Smith</td>
          <td style={{fontSize: 70,}}>28</td>
         
        </tr>
        <tr>
          <td style={{fontSize: 70,}}>Mohammed Ali</td>
          <td style={{fontSize: 70,}}>35</td>
          
        </tr>
      </tbody>
    </table>
  );
};

export default TableExample;
