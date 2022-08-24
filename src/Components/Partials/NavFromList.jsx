import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import appService from "../../Components/App/Appservices/App.service";

export const ProductGroupList = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await appService.getList("");
        if (response.data) {
          setApiData(response.data.productgroups.items);
          //console.log("no slash", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getResults();
  }, []);

  return apiData ? (
    <ul>
      {apiData.map((group, i) => {
        return (
          <li key={i}>
            <h3>{group.title}</h3>
            <GroupList GroupItems={group.subgroups} key={i} />
          </li>
        );
      })}
    </ul>
  ) : (
    <>...Loading</>
  );
};

export const GroupList = ({ GroupItems }) => {
  return GroupItems ? (
    <ul>
      {GroupItems.map((sub, j) => {
        return (
          sub.products.length && ( /* only show link if products array is not empty */
          <li key={j}>
            <h4>
              {console.log("sub", sub)}
              <Link to={`products/${sub.id}`}>{sub.title}</Link>
            </h4>

           
          </li>)
        );
      })}
    </ul>
  ) : (
    <>...Loading</>
  );
};

export const ProductNav = () => {
  return (
    <>
      <ProductGroupList />
    </>
  );
};
