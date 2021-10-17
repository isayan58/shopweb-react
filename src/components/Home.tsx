import React, { useState, useEffect } from "react";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import Header from './common/Header';
import './commonstyles/commonStyles.css';

interface ResponseData{
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
}

interface Props
{}
interface State
{
    response: ResponseData[]
}

const Home = (props: RouteComponentProps<Props>) =>
{
    const [response, setResponse] = useState<ResponseData[]>([]);

    const getProductData = () => {
        const fetchData = async () => {
          const apiResponse = await fetch("https://fakestoreapi.com/products");
          const responseData = await apiResponse.json();
          setResponse(responseData);
        };
        fetchData();
      };

      useEffect(getProductData, []);

    if (response.length === 0) return (
    <div>Loading...</div>);

    return (
      <div>
        <div className="product-list">
          {response.map((data) => (
            <div className="product-display-cards" key={data.id}>
              <div
                className="product-card"
                onClick={() => props.history.push(`/products/${data.id}`)}
              >
                <img src={data.image} alt="product" />
                <div className="product-title">{data.title}</div>
                <div className="product-price">${data.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}
export default withRouter(Home) ;