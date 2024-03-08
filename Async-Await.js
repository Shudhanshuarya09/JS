//all concept in (callBack hell , promise chain , Async-Await)

function getData(dataId) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      console.log("sucess");
    }, 2000);
  });
}

//Async-Await
async function getAllData() {
  console.log("getting data1...");
  await getData(1);
  console.log("getting data2...");
  await getData(2);
  console.log("getting data3...");
  await getData(3);
  console.log("getting data4...");
  await getData(4);
  console.log("getting data5...");
  await getData(5);
  console.log("getting data6...");
  await getData(6);
  
}