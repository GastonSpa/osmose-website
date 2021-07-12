import React from 'react';
import { BreadCrumb } from '../../components/BreadCrumb';
import { TreeList } from '../../components/TreeList';
import { WorldMap } from '../../components/WorldMap';
import { Link } from 'react-router-dom';

// import jsonFile from './ontology.json';
import jsonFile from '../../ontology.json';
import './styles.css';
// import musicFile from '../../images/music_kkivb11.mp3';

// REMPLACER CE QUI SUIS PAR UNE QUERY DU GENRE ?q=valeurniveau1+valeurniveau2+valeurniveau3

export const Ontology: React.FC = () => {

// page title got from url query
let urlQuery = window.location.search.slice(1);
// console.log('urlQuery contains : ', urlQuery);
const jsonStr = JSON.stringify(jsonFile);
const jsonObject = JSON.parse(jsonStr);
let tag = jsonObject[urlQuery];
console.log('tag contains : ', typeof tag, tag);

  // let name = jsonObject[tag].engName;
  // let desc = jsonObject[tag].engDesc;
  // // let tagImage = jsonObject[tag].image;
  // let parentTag = jsonObject[tag].parentTag;
  // let childrenTag = jsonObject[tag].childrenTag;
  // // let occurences = jsonObject[tag].occurences;
  // console.log('childrenTag contains : ', typeof childrenTag, childrenTag);

// Test if tag is  found in ontology
// function testTag{

// }

//  Ask db for dataset infos
  // function dbQuery() {

  // }

  return (
<div className="ontology">
  <div className="container-fluid">
    <BreadCrumb
    name={urlQuery}
    />
  </div>

  <div className="container my-5">
    <TreeList
    tag={urlQuery}
    titleLevel="h1"
    />
  </div>

  {/* <div className="container my-5">
    <h2>Sound examples</h2>
    <audio controls preload="auto">
      <source src={musicFile} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  </div> */}

  <div className="container my-5">
    <h2>Occurences in datasets</h2>

    <WorldMap
    // datasetList=""
    >
    </WorldMap>
  </div>

</div>
  );
}