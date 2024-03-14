import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons"; // tıklanmamış için
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons"; // tıklanmış için
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faCalendarAlt,
  faList,
  faBook,
  faIndustry,
} from "@fortawesome/free-solid-svg-icons"; //Hakkında kısmı ikonları

import "./Activity.css";
import Accordion from "./ListAccordion/ListAccordion";
import OffCanvas from "./OffCanvas/OffCanvas";
import { Row, Col } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { VideoDetails } from "../../components/Activity/VideoDetails";
import { useSelector, useDispatch } from "react-redux";

import {
  toggleLike,
  toggleBookmark,
  setProgress,
  setActiveTab,
  setAccordionData,
  setSubtypes,
  setNames,
  setVideos,
  setSelectedVideo,
} from "../../store/reducers/activityReducer";

export default function Activity() {
  const liked = useSelector((state: any) => state.activity.liked);
  const isBookmarked = useSelector((state: any) => state.activity.isBookmarked);
  const progress = useSelector((state: any) => state.activity.progress);
  const activeTab = useSelector((state: any) => state.activity.activeTab);
  const accordionData = useSelector(
    (state: any) => state.activity.accordionData
  );
  const subtypes = useSelector((state: any) => state.activity.subTypes);
  const names = useSelector((state: any) => state.activity.names);
  const videos = useSelector((state: any) => state.activity.videos);
  const selectedVideo = useSelector(
    (state: any) => state.activity.selectedVideo
  );

  const dispatch = useDispatch();
  const { courseID } = useParams();
  //console.log("Names Array:", names);
  const [courseContent, setcourseContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Apı request to fetch related content
        const response = await axios.get(
          `https://localhost:7260/api/AsyncCourseContents/GetByAsyncCourseId?id=${courseID}`
        );
        setcourseContent(response.data.items.slice(0, 10));
        const data = response.data; // Get the response data

        if (data && data.items) {
          const itemsArray = data.items;

          dispatch(setAccordionData(itemsArray));
          const namesArray = itemsArray.map((item: any) => item.name);
          dispatch(setNames(namesArray));
          //console.log("Names Array:", names);
          dispatch(setSubtypes(itemsArray.map((item: any) => item.subtype)));
          // dispatch(setSelectedVideo(itemsArray.map((item: any) => item.url)));
        }
        // Log the fetched data
        //console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log(videoId);
    // Call the async function
    fetchData();
  }, [courseID]);

  // Like butonunun toggle fonksiyonu
  const handleLikeClick = () => {
    dispatch(toggleLike());
  };

  // Bookmark butonunun toggle fonksiyonu
  const handleBookmarkClick = () => {
    dispatch(toggleBookmark());
  };

  const handleTabClick = (tab: any) => {
    dispatch(setActiveTab(tab));
  };
  const handleAccordionContentClick = (index: any) => {
    dispatch(setSelectedVideo(videos[index]));
  };
  // İlerleme çubuğunun simülasyonu için useEffect hook'u
  /* useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress(prevProgress => prevProgress + 10);
      }, 1000);

      // Cleanup fonksiyonu
      return () => clearInterval(interval);
    }
  }, [progress]);*/

  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);

  const [showButton, setShowButton] = useState(true);

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
    setShowButton(!isOffCanvasOpen); // OffCanvas açıldığında butonu gizle
  };

  const [videoId, SetVideoId] = useState(null);
  const handleVideoSelect = (videoId: any) => {
    SetVideoId(videoId);
  };

  return (
    <div className="content-activity">
      <div className="row header-row ">
        <div className="col-md-1 col-sm-0 ">
          <img
            src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
            className="edu-img"
            alt=""
          ></img>
        </div>
        <div className="col-lg-11 col-md-10 col-sm-9 col-12 ">
          <div className="edu-header">
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-8 edu-title ">
                <div className="edu-title-row">
                  .NET & React Fullstack | Öğrenme Yolculuğu <br></br>
                  id
                  {/*<span className="tag-blue">GELİŞİM YOLCULUĞU</span>*/}
                </div>
              </div>
              <div className="col-sm-12 col-xs-12 col-md-4 title-icon ">
                <span className="score-badge">77.6 PUAN</span>
                <button
                  className={`like-button ${liked ? "liked" : ""}`}
                  onClick={handleLikeClick}
                >
                  <span className="heart-icon">{liked ? "❤️" : "🤍"}</span>
                  <span className="like-count">{liked ? 51 : 50}</span>
                </button>
                <button
                  className={`bookmark-icon ${isBookmarked ? "active" : ""}`}
                  onClick={handleBookmarkClick}
                  aria-label={
                    isBookmarked ? "Remove from bookmarks" : "Add to bookmarks"
                  }
                >
                  <FontAwesomeIcon
                    icon={isBookmarked ? fasBookmark : farBookmark}
                  />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="edu-progress-text">İyi gidiyorsun</div>
            </div>
            <div className="progress-row">
              <div className="row">
                <div className="col-11">
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      {progress === 10 && (
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="progress-bar-icon"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <span className="ptg">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row content-row">
        <div className="row">
          <div>
            <ul className="tab-list">
              <li
                className={`tab-list-item ${
                  activeTab === "icerik" ? "active" : ""
                }`}
                onClick={() => handleTabClick("icerik")}
              >
                İçerik
              </li>
              <li
                className={`tab-list-item ${
                  activeTab === "hakkinda" ? "active" : ""
                }`}
                onClick={() => handleTabClick("hakkinda")}
              >
                Hakkında
              </li>
              {/*} <li
                className={`tab-list-item ${activeTab === "soru" ? "active" : ""
                  }`}
                onClick={() => handleTabClick("soru")}
              >
                Soru Sor & Paylaş
                </li>*/}
            </ul>
            <div className="tab-content">
              {activeTab === "icerik" && (
                <div>
                  <div className="icerik-detail">
                    <Row className="justify-content-end flex-row-reverse">
                      <VideoDetails videoId={videoId} />
                      {/* Buraya aşağıda listeleyeceğimiz kurslardan hangisine tıklarsak onun id sini göndereceğiz 
                          VideoDetails içinde o id yi yakalayıp getbyid olan apiye istek atacağız
                          gelen verideki bilgileri o kısıma yazdıracağız
                      */}
                      <Col className="custom-left">
                        <div className="scrollable-div">
                          {courseContent.map((item: any, index: any) => (
                            <>
                              <table
                                key={index}
                                className="table table-hover table-light"
                              >
                                <tr>
                                  <div className="mx-4 mt-3">
                                    <div onClick={() => SetVideoId(item.id)}>
                                      <div>
                                        <p className="subtitle-detail left-menu-link-import">
                                          {item.name}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </tr>
                              </table>
                            </>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              )}
              {} {activeTab === "soru" && <div>Soru Sor & Paylaş Bölümü</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
