/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

/// INTERFACES ///
/// FUNCTIONS ///
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits',
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits',
    };
}
var major1 = { credits: 3, brand: 'MajorCredits' };
var major2 = { credits: 4, brand: 'MajorCredits' };
var minor1 = { credits: 1, brand: 'MinorCredits' };
var minor2 = { credits: 2, brand: 'MinorCredits' };
console.log(sumMajorCredits(major1, major2)); // { credits: 7, brand: 'MajorCredits' }
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, brand: 'MinorCredits' }

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtCQUFrQjtBQVlsQixpQkFBaUI7QUFFakIsU0FBUyxlQUFlLENBQ3ZCLFFBQXNCLEVBQ3RCLFFBQXNCO0lBRXRCLE9BQU87UUFDTixPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTztRQUM1QyxLQUFLLEVBQUUsY0FBYztLQUNyQixDQUFDO0FBQ0gsQ0FBQztBQUVELFNBQVMsZUFBZSxDQUN2QixRQUFzQixFQUN0QixRQUFzQjtJQUV0QixPQUFPO1FBQ04sT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU87UUFDNUMsS0FBSyxFQUFFLGNBQWM7S0FDckIsQ0FBQztBQUNILENBQUM7QUFFRCxJQUFNLE1BQU0sR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUNuRSxJQUFNLE1BQU0sR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUVuRSxJQUFNLE1BQU0sR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUNuRSxJQUFNLE1BQU0sR0FBaUIsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsQ0FBQztBQUVuRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdDQUF3QztBQUN0RixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHdDQUF3QyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gSU5URVJGQUNFUyAvLy9cblxuaW50ZXJmYWNlIE1ham9yQ3JlZGl0cyB7XG5cdGNyZWRpdHM6IG51bWJlcjtcblx0YnJhbmQ6ICdNYWpvckNyZWRpdHMnO1xufVxuXG5pbnRlcmZhY2UgTWlub3JDcmVkaXRzIHtcblx0Y3JlZGl0czogbnVtYmVyO1xuXHRicmFuZDogJ01pbm9yQ3JlZGl0cyc7XG59XG5cbi8vLyBGVU5DVElPTlMgLy8vXG5cbmZ1bmN0aW9uIHN1bU1ham9yQ3JlZGl0cyhcblx0c3ViamVjdDE6IE1ham9yQ3JlZGl0cyxcblx0c3ViamVjdDI6IE1ham9yQ3JlZGl0c1xuKTogTWFqb3JDcmVkaXRzIHtcblx0cmV0dXJuIHtcblx0XHRjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcblx0XHRicmFuZDogJ01ham9yQ3JlZGl0cycsXG5cdH07XG59XG5cbmZ1bmN0aW9uIHN1bU1pbm9yQ3JlZGl0cyhcblx0c3ViamVjdDE6IE1pbm9yQ3JlZGl0cyxcblx0c3ViamVjdDI6IE1pbm9yQ3JlZGl0c1xuKTogTWlub3JDcmVkaXRzIHtcblx0cmV0dXJuIHtcblx0XHRjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcblx0XHRicmFuZDogJ01pbm9yQ3JlZGl0cycsXG5cdH07XG59XG5cbmNvbnN0IG1ham9yMTogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiAzLCBicmFuZDogJ01ham9yQ3JlZGl0cycgfTtcbmNvbnN0IG1ham9yMjogTWFqb3JDcmVkaXRzID0geyBjcmVkaXRzOiA0LCBicmFuZDogJ01ham9yQ3JlZGl0cycgfTtcblxuY29uc3QgbWlub3IxOiBNaW5vckNyZWRpdHMgPSB7IGNyZWRpdHM6IDEsIGJyYW5kOiAnTWlub3JDcmVkaXRzJyB9O1xuY29uc3QgbWlub3IyOiBNaW5vckNyZWRpdHMgPSB7IGNyZWRpdHM6IDIsIGJyYW5kOiAnTWlub3JDcmVkaXRzJyB9O1xuXG5jb25zb2xlLmxvZyhzdW1NYWpvckNyZWRpdHMobWFqb3IxLCBtYWpvcjIpKTsgLy8geyBjcmVkaXRzOiA3LCBicmFuZDogJ01ham9yQ3JlZGl0cycgfVxuY29uc29sZS5sb2coc3VtTWlub3JDcmVkaXRzKG1pbm9yMSwgbWlub3IyKSk7IC8vIHsgY3JlZGl0czogMywgYnJhbmQ6ICdNaW5vckNyZWRpdHMnIH1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=