import React, { useState, useEffect } from "react";
import asyncCourseService from "../../services/asyncCourseService";

interface AsyncCourse {
  id: string;
  categoryId: string;
  name: string;
}

export const AsyncCourseTest: React.FC = () => {
  const [asyncCourses, setAsyncCourses] = useState<AsyncCourse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAsyncCourses = async () => {
      try {
        const response = await asyncCourseService.getAll();
        setAsyncCourses(response.data.items);
      } catch (error: any) {
        console.error("Veri çekme hatası:", error.message);
        setError("Veri çekme işlemi başarısız oldu");
      } finally {
        setLoading(false);
      }
    };

    fetchAsyncCourses();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <div>
      <h1>AsyncCourse Listesi</h1>
      <ul>
        {asyncCourses.map((asyncCourse) => (
          <li key={asyncCourse.id}>
            <strong>Kategori ID:</strong> {asyncCourse.categoryId}
            <br />
            <strong>İsim:</strong> {asyncCourse.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncCourseTest;
