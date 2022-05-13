import PersonalForm from "./Components/PersonalForm";

function App() {

  const interests = [
    {
      id: 1,
      value: "Photography",
    },
    {
      id: 2,
      value: "Hiking",
    },
    {
      id: 3,
      value: "Basketball",
    },
    {
      id: 4,
      value: "Biking",
    },
    {
      id: 5,
      value: "Music",
    },
  ];

  return (
    <div>
      <PersonalForm interests={interests} />
    </div>
  );
}

export default App;
