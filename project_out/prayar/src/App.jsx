import React, { useEffect, useState } from "react";
import Prayer from "./components/Prayer";

const App = () => {
  const [prayerTimes, setprayerTimes] = useState({});
  const [DateTime, setDateTime] = useState("");
  const [City, setCity] = useState("Cairo");
  const cities = [
    { name: "القاهرة", value: "Cairo" },
    { name: "الإسكندرية", value: "Alexandria" },
    { name: "الجيزة", value: "Giza" },
    { name: "المنصورة", value: "Mansoura" },
    { name: "أسوان", value: "Aswan" },
    { name: "الأقصر", value: "Luxor" },
    { name: "الإسماعيلية", value: "Ismailia" },
    { name: "أسيوط", value: "Assiut" },
    { name: "البحر الأحمر", value: "Red Sea" },
    { name: "البحيرة", value: "Beheira" },
    { name: "بني سويف", value: "Beni Suef" },
    { name: "بورسعيد", value: "Port Said" },
    { name: "جنوب سيناء", value: "South Sinai" },
    { name: "الدقهلية", value: "Dakahlia" },
    { name: "دمياط", value: "Damietta" },
    { name: "سوهاج", value: "Sohag" },
    { name: "السويس", value: "Suez" },
    { name: "الشرقية", value: "Sharqia" },
    { name: "شمال سيناء	", value: "North Sinai" },
    { name: "الغربية", value: "Gharbia" },
    { name: "الفيوم", value: "Fayoum" },
    { name: "القليوبية", value: "Qalyubia" },
    { name: "قنا", value: "Qena" },
    { name: "كفر الشيخ", value: "Kafr El Sheikh" },
    { name: "مطروح", value: "Matrouh" },
    { name: "المنوفية", value: "Monufia" },
    { name: "المنيا", value: "Minya" },
    { name: "الوادي الجديد", value: "New Valley" },
  ];
  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        const response = await fetch(
          `https://api.aladhan.com/v1/timingsByCity?date=03-09-2024&city=Eg&country=${City}`
        );
        const data_Prayer = await response.json();

        setprayerTimes(data_Prayer.data.timings);
        setDateTime(data_Prayer.data.date.gregorian.date);
        console.log(data_Prayer.data.date.gregorian.date);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPrayerTimes();
  }, [City]);
  const formateTime = (time) => {
    if (!time) {
      return "00:00";
    }
    let [houer, minuts] = time.split(":").map(Number);
    const perd = houer >= 12 ? "PM" : "AM";
    houer = houer % 12 || 12;
    return `${houer}:${minuts < 10 ? "0" + minuts : minuts} ${perd}`;
  };
  return (
    <section>
      <div className="container">
        <div className="Top_section">
          <div className="City">
            <h3>المدينه</h3>

            <select name="" id="" onChange={(e) => setCity(e.target.value)}>
              {cities.map((city_obj) => (
                <option key={city_obj.value} value={city_obj.value}>
                  {city_obj.name}
                </option>
              ))}
            </select>
          </div>

          <div className="date">
            <h3>التاريخ</h3>
            <h4>{DateTime}</h4>
          </div>
        </div>
        <Prayer name="الفجر" time={formateTime(prayerTimes.Fajr)} />
        <Prayer name="الظهر" time={formateTime(prayerTimes.Dhuhr)} />
        <Prayer name="العصر" time={formateTime(prayerTimes.Asr)} />
        <Prayer name="المغرب" time={formateTime(prayerTimes.Maghrib)} />
        <Prayer name="العشاء" time={formateTime(prayerTimes.Isha)} />
      </div>
    </section>
  );
};
export default App;
