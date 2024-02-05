import React, { useState, useEffect } from 'react';
import '../App.css';
//import ArticleList from './ArticleList';

function IntroContainer() {
  // use of state
  const [articles, setArticles] = useState([])
  const [fArticles, setFArticles] = useState([])
  const [filterText, setFilterText] = useState('')
  const [selectedArticle, setSelectedArticle] = useState(null)

  
  return (
    <div className="App">
      Intro Container
    </div>
  )
}

export default IntroContainer;
