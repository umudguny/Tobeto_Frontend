import {
  faBook,
  faCalendarAlt,
  faClock,
  faIndustry,
  faList,
  faTasks,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {};

export const ActivityAbout = (props: Props) => {
  return (
    <>
      <div className="tab-hakkında">
        <div className="info-item row">
          <div className="col-6">
            <table>
              <tr className="table-row">
                <td>
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                </td>
                <td className="column-width">Başlangıç</td>
                <td className="table-desc">01.01.2024</td>
              </tr>

              <tr className="table-row">
                <td>
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                </td>
                <td className="column-width">Bitiş</td>
                <td className="table-desc">01.02.2024</td>
              </tr>

              <tr className="table-row">
                <td>
                  <FontAwesomeIcon icon={faClock} className="icon" />
                </td>
                <td>Geçirdiğin Süre</td>
                <td className="table-desc">28 sa 28 dk</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faClock} className="icon" />
                </td>
                <td>Tahmini Süre</td>
                <td className="table-desc">65 g 36 sa 30 dk</td>
              </tr>

              <tr>
                <td>
                  <FontAwesomeIcon icon={faList} className="icon" />
                </td>
                <td>Kategori</td>
                <td className="table-desc">Genel</td>
              </tr>

              <tr>
                <td>
                  <FontAwesomeIcon icon={faBook} className="icon" />
                </td>
                <td>İçerik</td>
                <td className="table-desc">290</td>
              </tr>

              <tr>
                <td>
                  <FontAwesomeIcon icon={faTasks} className="icon" />
                </td>
                <td>Görev</td>
                <td className="table-desc">65</td>
              </tr>

              <tr>
                <td>
                  <FontAwesomeIcon icon={faVideo} className="icon" />
                </td>
                <td>Video</td>
                <td className="table-desc">225</td>
              </tr>

              <tr>
                <td>
                  <FontAwesomeIcon icon={faIndustry} className="icon" />
                </td>
                <td>Üretici Firma</td>
                <td className="table-desc">Enocta</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
