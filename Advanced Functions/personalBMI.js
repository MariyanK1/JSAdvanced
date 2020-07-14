/*
A wellness clinic has contacted you with an offer - they want you to write a program that 
composes patient charts and performs some preliminary evaluation of their condition.
The data comes in the form of several arguments, describing a person - their name, age, weight in kilograms and height in centimeters.
Your program must compose this information into an object and return it for further processing.

The patient chart object must contain the following properties:
⦁	name
⦁	personalInfo, which is an object holding their age, weight and height as properties
⦁	BMI - body mass index. You can find information about how to calculate it here: https://en.wikipedia.org/wiki/Body_mass_index
⦁	status

The status is one of the following:
⦁	underweight, for BMI less than 18.5;
⦁	normal, for BMI less than 25;
⦁	overweight, for BMI less than 30;
⦁	obese, for BMI 30 or more;

Once the BMI and status are calculated, you can make a recommendation. If the patient is obese, add an additional 
property called recommendation and set it to “admission required”.

Input
Your function needs to take four arguments - name, age, weight and height

Output
Your function needs to return an object with properties as described earlier. All numeric values should be rounded to the nearest whole number.
All fields should be named exactly as described (their order is not important).
Look at the sample output for more information.

Sample Case:

In:	
“Peter”, 29, 75, 182	{ name: 'Peter',
  
Out:
  personalInfo: {
    age: 29,
    weight: 75,
    height: 182
  }
  BMI: 23
  status: 'normal' }
*/


function solve(name, age, weight, height) {
    const heightInM = height / 100;
    const bmi = Math.round(weight / (heightInM ** 2));
    let output = {
        name,
        personalInfo: {
            age,
            weight,
            height
        }
    }
    output['BMI'] = bmi;

    let status = '';

    if (bmi < 18.5) {
        status = 'underweight';
    } else if (bmi < 25) {
        status = 'normal';
    } else if (bmi < 30) {
        status = 'overweight';
    } else {
        status = 'obese';
        output['recommendation'] = 'admission required';
    }

    output['status'] = status;

    return output
}

solve("Peter", 29, 75, 182)
