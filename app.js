
// //Задание 1

// const xmlString = `
// 	<list>
// 		<student>
// 			<name lang="en">
// 				<first>Ivan</first>
// 				<second>Ivanov</second>
// 			</name>
// 			<age>35</age>
// 			<prof>teacher</prof>
// 		</student>
// 		<student>
// 			<name lang="ru">
// 				<first>Петр</first>
// 				<second>Петров</second>
// 			</name>
// 			<age>58</age>
// 			<prof>driver</prof>
// 		</student>
// 	</list>
// `;
// const parser = new DOMParser();
// let result = [];

// const xmlDOM = parser.parseFromString(xmlString, "text/xml");
// const students = xmlDOM.querySelectorAll('student');

// students.forEach(node => {
// 	let student = {
// 		name: `${node.querySelector('first').textContent}${node.querySelector('second').textContent
// }`,
// 		age: node.querySelector('age').textContent,
// 		prof: node.querySelector('prof').textContent,
// 		lang: node.querySelector('name').getAttribute('lang')

// 	}
// 	result.push(student);
// });
// console.log(result)

//  //Задание 2
// const jsonString = `
// {
// 	"list": [
// 		{
// 			"name": "Petr",
// 			"age": "20",
// 			"prof": "mechanic"
// 		},
// 		{
// 			"name": "Vova",
// 			"age": "60",
// 			"prof": "pilot"
// 		}
// 	]
// }
// `
// const data = JSON.parse(jsonString);

// const list = data.list;

// const result = {
// 	list: [{
// 			name: list[0].name,
// 			prof: list[0].prof,
// 			age: list[0].age},
// 			{
// 			name: list[1].name,
// 			prof: list[1].prof,
// 			age: list[1].age}
// 	]};
// console.log('result', result)


////Задание 3
// let input = document.querySelector('.input');
// let button = document.querySelector('.btn');
// let resultNode = document.querySelector('.out');

// button.onclick = function(){
// 	let a = +input.value;
// 	let result = '';
// 	if(a <= 10 && a >= 1){
// 		function useRequest(url, callback){
// 			let xhr = new XMLHttpRequest();
// 			xhr.open('GET', url, true);

// 			xhr.onload = function(){
// 				if(xhr.status != 200){
// 					console.log('Status answer: ', xhr.status)
// 				}else{
// 					const result = JSON.parse(xhr.response);
// 					if (callback){
// 						callback(result)
// 					}
// 				}
// 			}

// 			xhr.onerror= function(){
// 				console.log('Error! Status answer: ', xhr.status)
// 			}
// 			xhr.send();
// 		}
// 		function dispResult(apiData){
// 			let cards = '';

// 			apiData.forEach(item => {
// 				const cardBlock = `
// 					<div class="card">
// 						<img
// 							src="{item.download_url}"
// 							class="card-img"
// 						/>
// 						<p>${item.author}</p>
// 					</div>
// 				`;
// 				cards = cards + cardBlock
// 			});
// 			resultNode.innerHTML = cards;
// 		}
// 	}else{
// 		result = `число ${a} вне диапазона от 1 до 10`
// 	}
// 	useRequest(`https://picsum.photos/v2/list?limit=${a}`, dispResult);
// 	resultNode.innerHTML = result
// }

////Задание 4
// let inputWidth = document.querySelector('.width');
// let inputHeight = document.querySelector('.height');
// let outFetch = document.querySelector('.out-fetch');
// let btnFetch = document.querySelector('.btn-fetch');

// btnFetch.onclick = function(){
// 	let getWidth = +inputWidth.value;
// 	let getHeight = +inputHeight.value;
// 	if ((getWidth >= 100 && getWidth <= 300) && (getHeight >= 100 && getHeight <= 300)){
// 			async function sendRequest(url){
// 								function readAsync(data) {
// 					return new Promise(r => {
// 						let reader = new FileReader();
// 						reader.onloadend = function () {
// 							r(reader.result)
// 						}
// 						reader.readAsDataURL(data);
// 					});
// 				}
// 					const response = await fetch(url);
// 					const data = await response.blob()
// 					const dataUrl = await readAsync(data);
// 			return document.querySelectorAll('.img')[0].setAttribute('src', dataUrl);
// 		}
// 		sendRequest(`https://picsum.photos/${getWidth}/${getHeight}`)
// 	}else{
// 		outFetch.innerHTML = `одно из чисел вне диапазона от 100 до 300`;
// 	}
// }
