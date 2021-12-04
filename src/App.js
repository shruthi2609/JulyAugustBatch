import React from 'react'
import CompanyTitle from './Components/CompanyTitle';
import ProductCatalog from './Components/ProductCatalog';
const prop1={imgSource:"https://images-eu.ssl-images-amazon.com/images/I/41Rx3ZhLy0L._AC_SX184_.jpg" 
,buyLink:"https://www.amazon.in/dp/B01LF9EX1G/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-14&pf_rd_r=B2VRWFC72X10AFC7B6JP&pf_rd_t=101&pf_rd_p=d9546384-745d-44b1-b62e-1a567194bddc&pf_rd_i=1380072031"
,rating:"4.5 stars"
,price:"Rs.11,000"}
const prop2={imgSource:"https://images-eu.ssl-images-amazon.com/images/I/41Rx3ZhLy0L._AC_SX184_.jpg" 
,buyLink:"https://www.amazon.in/dp/B01LF9EX1G/ref=s9_acsd_al_bw_c2_x_0_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-14&pf_rd_r=B2VRWFC72X10AFC7B6JP&pf_rd_t=101&pf_rd_p=d9546384-745d-44b1-b62e-1a567194bddc&pf_rd_i=1380072031"
,rating:"4.5 stars"
,price:"Rs.11,000"}
 const App=()=>{
    return(
        <>
        <CompanyTitle companyName="Flipkart">
        </CompanyTitle>
        <ProductCatalog propObject={prop1}></ProductCatalog>
        <ProductCatalog 
        propObject={prop2}
        ></ProductCatalog>
        </>
    )
}
export default App;
