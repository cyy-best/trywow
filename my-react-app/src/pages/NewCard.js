import React, { useState } from 'react';
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

    const handlePublish = () => {
        // 在这里执行发布逻辑，你可以将选定的图片、标题和文字传递到后端或执行其他操作
        console.log('Title:', title);
        console.log('Selected Images:', selectedImages);
        console.log('Text:', text);
        // 这里可以添加发送请求的代码

        // 清空选择
        setSelectedImages([]);
        setText('');
        setTitle('');
    };
    return (
        <div className="image-uploader-container">
            <input type="text" placeholder="添加标题" value={title} onChange={handleTitleChange} />
            <input type="file" accept="image/*" onChange={handleImageChange} multiple />
            <div className="selected-images-container">
                {selectedImages.map((image, index) => (
                    <div key={index} className="image-preview">
                        <img src={image} alt={`Selected ${index + 1}`} />
                        <button onClick={() => handleRemoveImage(index)}>删除</button>
                    </div>
                ))}
            </div>

            <textarea placeholder="Write down your experience here..." value={text} onChange={handleTextChange}></textarea>

            <button onClick={handlePublish}>发布</button>
        </div>
    )
}
export default NewCard;