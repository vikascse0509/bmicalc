import { useState } from 'react';
import './App.css';

function App() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInch, setHeightInch] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debugging output
    console.log("Age:", age);
    console.log("Gender:", gender);
    console.log("Height Feet:", heightFeet);
    console.log("Height Inch:", heightInch);
    console.log("Weight:", weight);

    if (age && gender && heightFeet && heightInch && weight && parseInt(heightFeet) > 0 && parseInt(weight) > 0) {
      const height = ((parseInt(heightFeet) * 12) + parseInt(heightInch)) * 0.0254;
      console.log(`Calculated height in meters: ${height}`);

      const bmi = parseFloat(weight) / (height * height);
      console.log(`Calculated BMI: ${bmi}`);

      let category = '';
      if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal Weight";
      } else if (bmi >= 24.9 && bmi < 29.9) {
        category = "Overweight";
      } else {
        category = "Obesity";
      }
      
      setResult(`Your BMI: ${bmi.toFixed(2)}\nCategory: ${category}`);
    } else {
      console.log("Please fill out all fields");
      setResult("Please fill out all fields");
    }
  };

  return (
    <>
      <div className='max-w-[500px] mx-auto my-[100px] p-[20px] rounded-[8px] bg-[#F2F2F2]'>
        <h1 className='text-center text-[28px] font-bold mb-[10px]'>BMI Calculator</h1>
        <form onSubmit={handleSubmit} action="" className='flex flex-col mb-[20px]'>
          <label className='text-[large] font-[600px] mb-[5px]' htmlFor="gender">Gender :</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} className='p-[10px] w-[95%] border-none mb-[10px] rounded-[5px]' id="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label className='text-[large] font-[600px] mb-[5px]' htmlFor="age">Age :</label>
          <input value={age} onChange={(e) => setAge(e.target.value)} className='p-[10px] w-[95%] border-none mb-[10px] rounded-[5px]' type="number" placeholder='Enter your age' required />

          <label className='text-[large] font-[600px] mb-[5px]' htmlFor="heightFeet">Height :</label>
          <input value={heightFeet} onChange={(e) => setHeightFeet(e.target.value)} className='p-[10px] w-[95%] border-none mb-[10px] rounded-[5px]' type="number" placeholder='Enter height in Feet' required />
          <input value={heightInch} onChange={(e) => setHeightInch(e.target.value)} className='p-[10px] w-[95%] border-none mb-[10px] rounded-[5px]' type="number" placeholder='Enter height in Inch' required />

          <label className='text-[large] font-[600px] mb-[5px]' htmlFor="weight">Weight :</label>
          <input value={weight} onChange={(e) => setWeight(e.target.value)} className='p-[10px] w-[95%] border-none mb-[10px] rounded-[5px]' type="number" placeholder='Enter weight in KG' required />

          <input type="submit" value='Calculate BMI' className='w-[95%] p-[10px] mt-[10px] bg-[#3498db] rounded-[10px] text-[20px] font-bold text-[#fff] cursor-pointer' />
        </form>

        {result && <div className='font-bold mt-[20px] text-[#3498db]'>{result}</div>}
      </div>
    </>
  );
}

export default App;
