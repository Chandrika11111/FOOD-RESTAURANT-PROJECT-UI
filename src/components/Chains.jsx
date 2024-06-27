import React, { useState, useEffect } from "react";
import { API_URL } from "../api";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/allVendors`);
      const NewData = await response.json();
      setVendorData(NewData);
      // console.log(NewData)
      setLoading(false);
    } catch (error) {
      console.error("failed to fetch data");
      setLoading(true);
    }
  };
  useEffect(() => {
    vendorFirmHandler();
    console.log(vendorData);
  }, []);
  const scrollHandler = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 500;
    if (direction === "left") {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else if (direction === "right") {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="mediaChainSection">
      <div className="loaderSection">
      {loading && (
        <>
          <div className="loader">loading....</div>
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="black"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </>
      )}
      </div>
      <div className="buttonSection">
        <button
          onClick={() => {
            scrollHandler("left");
          }}
        >
          <FaRegArrowAltCircleLeft className="btnIcons" />
        </button>
        <button
          onClick={() => {
            scrollHandler("right");
          }}
        >
          <FaRegArrowAltCircleRight className="btnIcons" />
        </button>
      </div>
      <h3 className="title">Top Restaurant Chains in the world</h3>
      <section
        className="chainSection"
        id="chainGallery"
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {vendorData.vendors &&
          vendorData.vendors.map((vendor) => {
            return (
              <>
                <div className="vendorBox">
                  {vendor.firm.map((item, index) => {
                    return (
                      <>
                        {/* <div className="firmName">
                    {item.firmName}
                    </div>  */}

                        <div className="firmImg">
                          <img src={`${API_URL}/uploads/${item.image}`} />
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
      </section>
    </div>
  );
};

export default Chains;
