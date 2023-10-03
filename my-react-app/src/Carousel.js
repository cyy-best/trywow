import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 引入轮播图样式
import { Carousel } from 'react-responsive-carousel';
import 'font-awesome/css/font-awesome.min.css';
import './css/carousel.css'

function MyCarousel() {
    const [searchQuery, setSearchQuery] = useState(''); // 创建状态变量用于存储搜索关键词
    const [filteredCards, setFilteredCards] = useState([]); // 创建状态变量用于存储过滤后的卡片数据
    const handleSearch = () => {
        // 获取输入的搜索关键词
        const query = document.querySelector('.search-box input').value;
        setSearchQuery(query);

        // 过滤卡片数据，仅显示包含关键词的卡片
        const filteredData = fetchedData.filter((card) => {
            // 根据你的卡片数据结构和关键词匹配逻辑来调整这部分代码
            // 这里假设卡片数据中有一个名为title的字段来表示卡片的标题
            return card.title.toLowerCase().includes(query.toLowerCase());
        });

        setFilteredCards(filteredData);
    };

    // 在此处添加你的卡片数据获取逻辑
    const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        // 获取卡片数据的逻辑，例如使用fetch从API获取数据
        // 并将数据存储在fetchedData状态变量中
        // 这部分逻辑应该在你的实际项目中实现
    }, []);
    return (
        <div className='carousel-container'>
            <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000} transitionTime={500}>
                <div className='carousel-cards carousel-image1'></div>
                <div className='carousel-cards carousel-image2'></div>
                <div className='carousel-cards carousel-image3'></div>
                <div className='carousel-cards carousel-image4'></div>
            </Carousel>

            <div className='search-box'>
                <input type='text' placeholder='Search destinations/hotels/guides/discount travel' />
                <button type='submit'>
                    <i className='fa fa-search'></i> {/* 这里使用 Font Awesome 图标作为搜索图标 */}
                </button>
            </div>
        </div>
    );
}

export default MyCarousel;
