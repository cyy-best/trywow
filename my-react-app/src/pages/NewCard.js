import React, { useState } from 'react';
import Navbar from '../NavigationBar';
import '../css/nav.css';
import '../css/newcard.css'

function NewCard() {
    const [selectedImages, setSelectedImages] = useState([]);
    const [text, setText] = useState('');
    const [title, setTitle] = useState(''); // 新增标题状态


    const handleImageChange = (e) => {
        const files = e.target.files;
        if (files.length + selectedImages.length > 9) {
            alert('最多只能上传9张图片。');
            return;
        }

        const newImages = Array.from(files).map(file => URL.createObjectURL(file));
        setSelectedImages(prevImages => [...prevImages, ...newImages]);
    };

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleRemoveImage = (index) => {
        const updatedImages = [...selectedImages];
        updatedImages.splice(index, 1);
        setSelectedImages(updatedImages);
    };

    const handleSaveDraft = () => {
        const draftData = {
            title,
            selectedImages,
            text,
        };
        localStorage.setItem('draftData',JSON.stringify(draftData))
    }

    const handlePublish = () => {
        // 在这里执行发布逻辑
        if(!title || selectedImages.length ===0  || !text){
            alert('please add title, text and at least one image')
        }
        else{console.log('Title:', title);
        console.log('Selected Images:', selectedImages);
        console.log('Text:', text);
        // 添加发送请求的代码

        // 清空选择
        setSelectedImages([]);
        setText('');
        setTitle('');}
    };
    return (
        <div className='new-card-page'>
        <Navbar></Navbar>
        <div className="image-uploader-container">
            <input type="text" placeholder="title here" value={title} onChange={handleTitleChange} />
            <input type="file" accept="image/*" onChange={handleImageChange} multiple />
            <div className="selected-images-container">
                {selectedImages.map((image, index) => (
                    <div key={index} className={`image-preview ${index ===0 ? 'cover-image': ''}`}>
                        <img src={image} alt={`Selected ${index + 1}`} />
                        <button onClick={() => handleRemoveImage(index)}>删除</button>
                    </div>
                ))}
            </div>

            <textarea placeholder="Write down your experience here..." value={text} onChange={handleTextChange}></textarea>
            <div className='btn-group'>
            <button className='pulish-btn' onClick={handlePublish}>Publish</button>
            <button className='save-draft' onClick={handleSaveDraft}> SaveDraft</button>
            </div>       
            
        </div>
        </div>
    )
}
export default NewCard;