import PortfolioList from '../portfolioList/portfolioList';
import './portfolio.scss'
import { useState, useEffect } from 'react';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data';

export default function Portfolio() {

  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Featured",
    },
    {
      id: "mobile",
      title: "Featured",
    },
    {
      id: "design",
      title: "Featured",
    },
    {
      id: "content",
      title: "Featured",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured": setData(featuredPortfolio);
        break;
      case "web": setData(webPortfolio);
        break;
      case "mobile": setData(mobilePortfolio);
        break;
      case "design": setData(designPortfolio);
        break;
      case "content": setData(contentPortfolio);
        break;
      default: setData(featuredPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img
              src={d.img}
         alt="" />
            <h3>
              {d.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
