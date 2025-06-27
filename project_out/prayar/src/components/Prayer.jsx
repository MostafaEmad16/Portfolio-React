const Prayer = ({name , time}) => {
  return (
    <div className="prayer">
      <p className="name_prayaer">{name}</p>
      <p className="time_prayaer">{time}</p>
    </div>
  );
};

export default Prayer;
