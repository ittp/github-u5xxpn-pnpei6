// const csv2Array = (fileInput: any){
//   //read file from input
//   this.fileReaded = fileInput.target.files[0];

//   let reader: FileReader = new FileReader();
//   reader.readAsText(this.fileReaded);

//    reader.onload = (e) => {
//    let csv: string = reader.result;
//    let allTextLines = csv.split(/\r|\n|\r/);
//    let headers = allTextLines[0].split(',');
//    let lines = [];

//     for (let i = 0; i < allTextLines.length; i++) {
//       // split content based on comma
//       let data = allTextLines[i].split(',');
//       if (data.length === headers.length) {
//         let tarr = [];
//         for (let j = 0; j < headers.length; j++) {
//           tarr.push(data[j]);
//         }

//        // log each row to see output
//        console.log(tarr);
//        lines.push(tarr);
//     }
//    }
//    // all rows in the csv file
//    console.log(">>>>>>>>>>>>>>>>>", lines);
//   }
//   }

import type { NextApiRequest, NextApiResponse } from 'next';
import type { User } from '../../interfaces';
import axios from 'axios';
import fs from 'fs-extra';
import { listeners } from 'process';

// Fake users data
// const users: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }];
// const rooms: User[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

const path = require('path');

async function converter(data) {
  console.clear();
  console.log(data);
  // let json = data.split('\n');

  let csv: string = data;
  let allTextLines = csv.split(/\r|\n|\r/);
  let headers = allTextLines[0].split(',');
  let lines = [];

  // let values = allTextLines.split(',');
  // let alines = Object.values(allTextLines);

  for (let i = 0; i < allTextLines.length; i++) {
    //       // split content based on comma
    let data = allTextLines[i].split(',');

    if (data.length === headers.length) {
      let tarr = [];
      for (let j = 0; j < headers.length; j++) {
        tarr.push(data[j]);
      }

      //        // log each row to see output
      // console.log(tarr);
      lines.push(tarr);
    }
  }

  //    // all rows in the csv file
  //    console.log(">>>>>>>>>>>>>>>>>", lines);

  //   console.log(alines);
  // let rows = allTextLines.map((i, key) => {
  //   let s = { key, values: i.split(',') };
  //   //console.log(s);
  //   return s;
  // });

  return { csv, json: { headers, lines } };
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  let { body, query, headers, method } = _req;

  let data, responseData;

  switch (method) {
    case 'GET':
      data = query;
      break;
    case 'POST':
      data = body;
      break;
  }

  if (data.url) {
    // const CSVToJSON = require('csvtojson');
    let fileData = await axios.get(data.url).then(async (response) => {
      let { data } = response;

      // headers.map((col, key) => {
      //   let item = { col, key };
      //   console.log(item);

      //   // console.log();
      //   // lines[col] = { key, title: col, value: values[key] };
      // });

      // console.log(lines);

      let json = converter(data);
      console.log(json);
      return { response, json };
    });
    // console.log(fileData);
    // let uploadDir = path.resolve('upload');
    // console.log(uploadDir);
    // let dataFileFullPath = path.join(uploadDir, 'data.csv');
    // fs.writeFileSync(dataFileFullPath);

    // console.log(c);
    // const jsonData = await CSVToJSON().fromStream(fileData.data);
    // CSVToJSON

    // res.status(200).json(data);
    responseData = { fileData };
  } else {
    responseData = { error: true, message: 'url' };
  }

  let fd = await axios.get(query['url']);

  let lines = fd.data.split(/\r|\n|\r/);

  let headers = lines[0].split(',');

  res.status(200).json(headers);
  // Get data from your database
}
