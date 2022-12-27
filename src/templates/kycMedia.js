import React, { useEffect } from "react";
import Layouts from "../layouts";
import KycMediaList from "../sections/kyc/kycMediaList";
import { kycListRequest } from "../Actions/kycActions";
import { useDispatch } from "react-redux";


const KycMedia = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getKycList = async () => {
     await dispatch(kycListRequest());
    }

    getKycList();
    
  }, [dispatch]);

  return (
    <>
      
        <KycMediaList />
    
    </>
  )
}

export default Layouts(KycMedia);