import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

export const VideoDetails = ({ videoId }: any) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [videoDetails, setVideoDetails] = useState<any[]>([]);

  useEffect(() => {
    if (!videoId) {
      setLoading(false);
      setError("Video seçiniz");
      return;
    }
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get(
          `https://localhost:7260/api/AsyncCourseContents/GetById?id=${videoId}`
        );
        const data = response.data;
        if (data) {
          // API'den gelen veriyi düzenleme
          const videoDetail = {
            id: data.id,
            name: data.name,
            url: data.url,
            language: data.language,
            category: data.category,
            subtype: data.subtype,
            producer: data.producer,
            description: data.description,
          };
          setVideoDetails([videoDetail]);
          setError(null);
        } else {
          setError("Video bilgileri bulunamadı.");
        }
      } catch (err) {
        setError("Video bilgileri yüklenirken bir hata oluştu.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!videoDetails || videoDetails.length === 0)
    return <div>No video details available.</div>;

  return (
    <>
      <Col className="custom-right">
        {videoDetails.map((item: any, index: any) => (
          <div className="video-area-cont" key={index}>
            <Row className="video-area">
              <div className="video-container">
                {/* Video iframe'i ve diğer detayları videoDetails'dan al */}
                <iframe
                  src={item.url}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </Row>
            <Row>
              <Col>
                <Row className="video-name">{item.name}</Row>
                {/* Diğer video detayları */}
                <Row>{`Language: ${item.language}`}</Row>
                <Row>{`Category: ${item.category}`}</Row>
                <Row>{`Subtype: ${item.subtype}`}</Row>
                <Row>{`Producer: ${item.producer}`}</Row>
                <Row>{`Description: ${item.description}`}</Row>
              </Col>
              {/* Diğer içerikler... */}
            </Row>
          </div>
        ))}
      </Col>
    </>
  );
};
