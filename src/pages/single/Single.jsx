import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://attachment.outlook.live.net/owa/MSA%3Ankalhan%40hotmail.co.uk/service.svc/s/GetAttachmentThumbnail?id=AQMkADAwATYwMAItYzdjOC01NQBhOS0wMAItMDAKAEYAAAN9%2Fy0Xa7PMQIrP3zzn9324BwDC5J5m%2B4%2FHT68jOcqScKaOAAACAQwAAAA%2FYp19JpCYRJdHjOLTEG86AAXdwHS7AAAAARIAEAA8BI7KZdjXRKOH7GsKbpi9&thumbnailType=2&isc=1&token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjczRkI5QkJFRjYzNjc4RDRGN0U4NEI0NDBCQUJCMTJBMzM5RDlGOTgiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJjX3VidnZZMmVOVDM2RXRFQzZ1eEtqT2RuNWcifQ.eyJvcmlnaW4iOiJodHRwczovL291dGxvb2subGl2ZS5jb20iLCJ1YyI6ImU2Mzg4MTU1MzkyMzQ1OWRhYzk5NTYyYzZkNTZhMTkzIiwidmVyIjoiRXhjaGFuZ2UuQ2FsbGJhY2suVjEiLCJhcHBjdHhzZW5kZXIiOiJPd2FEb3dubG9hZEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJpc3NyaW5nIjoiV1ciLCJhcHBjdHgiOiJ7XCJtc2V4Y2hwcm90XCI6XCJvd2FcIixcInB1aWRcIjpcIjE2ODg4NTMyMTIwNTkwNDlcIixcInNjb3BlXCI6XCJPd2FEb3dubG9hZFwiLFwib2lkXCI6XCIwMDA2MDAwMC1jN2M4LTU1YTktMDAwMC0wMDAwMDAwMDAwMDBcIixcInByaW1hcnlzaWRcIjpcIlMtMS0yODI3LTM5MzIxNi0zMzUxNzk1MTEzXCJ9IiwibmJmIjoxNjk1NTkzNDY0LCJleHAiOjE2OTU1OTQwNjQsImlzcyI6IjAwMDAwMDAyLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMEA4NGRmOWU3Zi1lOWY2LTQwYWYtYjQzNS1hYWFhYWFhYWFhYWEiLCJhdWQiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvYXR0YWNobWVudC5vdXRsb29rLmxpdmUubmV0QDg0ZGY5ZTdmLWU5ZjYtNDBhZi1iNDM1LWFhYWFhYWFhYWFhYSIsImhhcHAiOiJvd2EifQ.AJtzwWEx-Tv6rjwnnf1IOVHTh1AqqMz8H5Rc_H2ANdFo1zlVfuq0OgaUH1eBXobG57Wav0HpynsfWRxGESQMhzn-wel57gFx0JuIogrS2RRci01Qg_NxxSBXTIE8uUXdnrQ2kpG9zRJhHMrFx8BL00hPAeEXODqcjC0mHGj6QzTVNqLfoTkBznyjOdhzXqkjHTaibsGHQYDEKF23NxUCZ6OGsqdtfJJXDvTVbFM1_RR_AgPSkuFE0Nwjmv9gZ78gfPnSovtuMecMQtzXqyySBe7bsDC-FzW5amkXHEUOzFpHOGRKXSrLgNDEvMzUQB4I7GduXqxru3zusyelEoszcw&X-OWA-CANARY=njRiXcMFBEa5w3IJRiHG7wAMvSxLvdsYeqwLuQuawnDLu5j1fuej7bfRv2KEqvRqQZyGxFKmwXI.&owa=outlook.live.com&scriptVer=20230915006.14&animation=true"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Aaron Maddison</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">aaronmaddison69@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+44 781859749</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Colindale
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">UK</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;