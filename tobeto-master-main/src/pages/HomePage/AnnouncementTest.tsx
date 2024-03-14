import React, { useState, useEffect } from "react";
import announcementService from "../../services/announcementService";

interface Announcement {
  id: string;
  announcementTypeId: string;
  announcementTypeType: string;
  description: string;
  announcementName: string;
}

const AnnouncementTest: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnnouncements = async () => {
    try {
      const response = await announcementService.getAll();
      setAnnouncements(response.data.items);
    } catch (error: any) {
      console.error("Veri çekme hatası:", error.message);
      setError("Veri çekme işlemi başarısız oldu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div>
      <h1>Duyuru Listesi</h1>
      <ul>
        {announcements.map((announcement) => (
          <li key={announcement.id}>
            <strong>Duyuru Türü:</strong> {announcement.announcementTypeType}
            <br />
            <strong>Açıklama:</strong> {announcement.description}
            <br />
            <strong>Duyuru Adı:</strong> {announcement.announcementName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementTest;
