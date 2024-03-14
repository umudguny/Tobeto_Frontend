import React, { useState, useEffect } from "react";
import announcementTypeService from "../../services/announcementTypeService";

interface AnnouncementType {
  id: string;
  type: string;
}

const AnnouncementTypeList: React.FC = () => {
  const [announcementTypes, setAnnouncementTypes] = useState<
    AnnouncementType[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnnouncementTypes = async () => {
    try {
      const response = await announcementTypeService.getAll();
      setAnnouncementTypes(response.data.items);
    } catch (error: any) {
      console.error("Veri çekme hatası:", error.message);
      setError("Veri çekme işlemi başarısız oldu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncementTypes();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div>
      <h1>Duyuru Türü Listesi</h1>
      <ul>
        {announcementTypes.map((announcementType) => (
          <li key={announcementType.id}>{announcementType.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnnouncementTypeList;
