// eslint-disable-file
import { Component, Fragment } from "react";
import peopleTemplate from "../peopleTemplate";

import { withStyles } from "@material-ui/core";
import filter from "@inovua/reactdatagrid-community/filter";

import ReactDataGridApp from "./react-data-grid";
import getDataFromApi from "./gridClient";

// TODO:if PDF Viewer doesn't workout => Remove below comments and un-install the module
// PDF Viewer
// import { PDFViewer } from "@react-pdf/renderer";
// import PdfDocument from "./../Grid-Pdf-Viewer/grid-pdf-viewer";

const columns = [
  {
    name: "id",
    header: "Id",
    defaultVisible: false,
    type: "number",
    defaultWidth: 80,
  },
  { name: "name", header: "Name", defaultFlex: 1 },
  { name: "email", header: "Email", defaultFlex: 1 },
  { name: "age", header: "Age", type: "number", defaultFlex: 1 }
];

const defaultFilterValue = [
  { name: "name", operator: "startsWith", type: "string", value: "" },
  { name: "age", operator: "gte", type: "number", value: undefined },
];

const styles = {
  iFrameSize: {
    height: '600px',
    width: '400px'
  }
};
class ReactDataGridContainer extends Component {

  constructor(props) {
    super(props);
    const initialData = filter(peopleTemplate, defaultFilterValue);
    this.state = {
      isFetching: true,
      filterValue: defaultFilterValue,
      dataSource: initialData,
    };
    this.props.onDataChange(initialData);
  }

  async componentDidMount() {
    const data = await getDataFromApi();
    this.setState({
      isFetching: false,
      data: data,
      dataSource: data,
    });
    this.props.onDataChange(data);
  }

  onFilterValueChange = (data, events) => {
    const filteredData = filter(this.state.data, data);
    this.setState({
      filterValue: data,
      dataSource: filteredData
    });
    this.props.onDataChange(filteredData);
  };

  data = [
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 793103,
      "original_language": "zh",
      "original_title": "Ponyo: Meet Ponyo",
      "overview": "",
      "popularity": 6.566,
      "poster_path": "/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg",
      "release_date": "2010-03-02",
      "title": "Ponyo: Meet Ponyo",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 791771,
      "original_language": "en",
      "original_title": "How The Wheast Was One (A Dax Flame Motion Picture.)",
      "overview": "Take a trip into the Wild West, back when it was kill or be killed, shoot or be shot, and where wildness ran rampent. In this dramatic spaghetti western Motion Picture adapted from Dax Flames short western novel, Hands are for Punching, you will see a rugged bounty hunter cowboy, who usually works alone and is given the task to save a town being taken over by a bandit, but this time, the bounty hunter needs a partner. Wait A NEW PARTNER? Yes, see what things ensue when a bounty hunter gets a new partner. He never trusted anyone but learned to trust his new partner only to have that partner killed(Spoiler) after having finally trusting him. Will he avenge him? Will he save the town? Yes and yes. See for yourself in the journey that is How The Wheast Was One.",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "2010-04-03",
      "title": "How The Wheast Was One (A Dax Flame Motion Picture.)",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": "/vq93hckVoRSURDJgF4sYbPur3Px.jpg",
      "genre_ids": [],
      "id": 778418,
      "original_language": "en",
      "original_title": "Miley Cyrus: Live at House of Blues",
      "overview": "Miley Cyrus: Live from the House of Blues",
      "popularity": 0.6,
      "poster_path": "/aeJniPaBy37ldguav8ARggLsBqU.jpg",
      "release_date": "2010-06-21",
      "title": "Miley Cyrus: Live at House of Blues",
      "video": false,
      "vote_average": 10,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [28, 878, 53],
      "id": 764713,
      "original_language": "en",
      "original_title": "Two Soldiers",
      "overview": "Following a global nuclear war, two soldiers from opposing sides wander the battlegrounds searching for signs of life.",
      "popularity": 0.6,
      "poster_path": "/6SoBpCH2zrqTM2GttkcEoHNbaOZ.jpg",
      "release_date": "2010-12-21",
      "title": "Two Soldiers",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 753724,
      "original_language": "tr",
      "original_title": "Doğada Tek Başına",
      "overview": "Does man rule over nature or nature rule over man? Mankind's test with nature will be brought to the screen: Serdar Kılıç will demonstrate the ways to survive alone in the wilderness.",
      "popularity": 0.6,
      "poster_path": "/wXswm3IRUIEZ6JdAtApFlbpEfIP.jpg",
      "release_date": "2010-07-07",
      "title": "Doğada Tek Başına",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 753501,
      "original_language": "en",
      "original_title": "Hamish & Andy - Learn India",
      "overview": "India is a country of such immense diversity, beauty and complexity that to understand it better you would need some real television professionals. Join Hamish and Andy as they hit the road to Learn India!",
      "popularity": 0.6,
      "poster_path": "/73zp2itizVIOmrmBnD0uIlRVbku.jpg",
      "release_date": "2010-10-03",
      "title": "Hamish & Andy - Learn India",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": "/70kDBPzrlxKvGQHJ2XQuZva14eT.jpg",
      "genre_ids": [],
      "id": 753500,
      "original_language": "en",
      "original_title": "Hamish & Andy's Caravan of Courage - Great Britain and Ireland",
      "overview": "Hamish & Andy take the road less traveled through the isles of Great Britain and Ireland in an attempt to discover why after centuries of war, famine, plagues, and poor sporting teams, the Irish & British still manage to have a laugh more than most.",
      "popularity": 0.6,
      "poster_path": "/nCBLIGmpGBbaWZsdYEM2pxDa33H.jpg",
      "release_date": "2010-06-17",
      "title": "Hamish & Andy's Caravan of Courage - Great Britain and Ireland",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [18],
      "id": 748423,
      "original_language": "pt",
      "original_title": "Tanto",
      "overview": "Luiza doesn't know how to deal with the end of a relationship.",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "2010-04-26",
      "title": "So Much",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": "/4v8sCrOr6DRe1NrgwygcmWRsqoB.jpg",
      "genre_ids": [16, 35, 10749, 14],
      "id": 746899,
      "original_language": "ja",
      "original_title": "魔理沙とアリスのクッキーKiss",
      "overview": "After Marisa realizes she forgot to make Alice a gift for Valentine's Day, she rushes to prepare a batch of cookies for her with the help of Sakuya, but runs into trouble along the way.",
      "popularity": 0.6,
      "poster_path": "/vbjwXFiLA8vxlcgPYsB29hYUDXD.jpg",
      "release_date": "2010-02-15",
      "title": "Marisa and Alice's Cookie Kiss",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [16],
      "id": 744523,
      "original_language": "en",
      "original_title": "Shaun The Sheep - One Giant Leap for Lambkind",
      "overview": "Unidentified Farm Objects and paranormal sightings are the norm with Shaun the Sheep and his barnyard buddies Bitzer, Shirley, and Timmy, as they encounter more madcap mischief along with those Naughty Pigs next door. Big laughs are evident, as the creators of the Academy Award-winning Wallace & Gromit are out to prove that sheepherding fun is universal.",
      "popularity": 0.6,
      "poster_path": "/6SkkxMZ1NS84Vkhq4z7fAMKZiK6.jpg",
      "release_date": "2010-06-08",
      "title": "Shaun The Sheep - One Giant Leap for Lambkind",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [],
      "id": 734141,
      "original_language": "en",
      "original_title": "Abed's Uncontrollable Christmas",
      "overview": "When Abed wakes up to discover that everything is in stop motion animation, Professor Duncan and the study group help him try to discover the true meaning of Christmas.",
      "popularity": 0.6,
      "poster_path": "/4kM8efjEFVktwjWlAUqrCLZniuT.jpg",
      "release_date": "2010-12-09",
      "title": "Abed's Uncontrollable Christmas",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [27],
      "id": 729882,
      "original_language": "en",
      "original_title": "666",
      "overview": "The thief\"s comes only to steal , to kill and to destroy. Stay away from devil so that the devil will stay away from you. Always remember that the only powerful in this world is the god who made and create everything. Love god above all and place him in our hearts and we must make stronger  and tightened our relation to god and respect .",
      "popularity": 0.6,
      "poster_path": "/bg0X9wzhWFDutSuWDdIzDKeaW6o.jpg",
      "release_date": "2010-07-07",
      "title": "666",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [99],
      "id": 726016,
      "original_language": "ja",
      "original_title": "ジブリ創作のヒミツ ～宮崎駿と新人監督葛藤の400日",
      "overview": "Stepping closer and closer to his retirement, Hayao Miyazaki has no other means, but to choose up a new director. Ghibli's given some creative freedoms in the past, but they hardly lasted. Maro, an animator of 37 years. has done a good deed of works in his prior days. Thus, Miyazaki-san decides to appoint him as a new director for the upcoming feature of 'Arrietty the Borrower'.",
      "popularity": 0.6,
      "poster_path": "/uGGUVoL8YjkozQdHmjBXgnoiHdp.jpg",
      "release_date": "2010-08-15",
      "title": "Inside Ghibli's Creation: 400 Days of Clash Between Hayao Miyazaki and The New Director",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [35, 10402, 10770],
      "id": 724976,
      "original_language": "en",
      "original_title": "A Prairie Home Companion Live in HD!",
      "overview": "",
      "popularity": 0.6,
      "poster_path": "/s7EeokggaTU7aTsRVFVFysEhvCM.jpg",
      "release_date": "2010-02-04",
      "title": "A Prairie Home Companion Live in HD!",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [878],
      "id": 723342,
      "original_language": "en",
      "original_title": "Forge",
      "overview": "A man tries to save his reclusive scientist brother from slipping permanently into madness while struggling with the power of a stolen technology.",
      "popularity": 0.6,
      "poster_path": "/xg9vVwe4txRz0yT3mw7HrHtM5Am.jpg",
      "release_date": "2010-09-09",
      "title": "Forge",
      "video": false,
      "vote_average": 10,
      "vote_count": 2
    },
    {
      "adult": false,
      "backdrop_path": "/iFa3gNvqSld0IIIDLHCwiYdFwmO.jpg",
      "genre_ids": [28, 16],
      "id": 704935,
      "original_language": "en",
      "original_title": "Predators: Crucified",
      "overview": "Crucified is an animated short film which tells the story of how the Classic Predator was captured and tied up in the hunting camp on the Predator game preserve. The short film was released on the Predators (2010) Blu-ray.",
      "popularity": 2.059,
      "poster_path": "/bruZTgv810z1X5oPyc6QDG8hUFN.jpg",
      "release_date": "2010-10-19",
      "title": "Predators: Crucified",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [35, 18],
      "id": 701057,
      "original_language": "bn",
      "original_title": "Kusum",
      "overview": "A transvestite prostitute gets locked in a room with an English teacher  suffering from OCD. And so the plot begins. Watch this gripping short film  about how they struggle in each other's presence.",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "2010-02-17",
      "title": "Kusum",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": "/dJyRaANajlhdexTkUdeizi8NKVI.jpg",
      "genre_ids": [10402],
      "id": 699928,
      "original_language": "en",
      "original_title": "U2360° At the Rose Bowl",
      "overview": "U2's 360° concert at the famous Pasadena Rose Bowl was U2's biggest ever show in the United States with a box office attendance in excess of 97,000.  The first live streaming of a full-length stadium concert, U2360° at the Rose Bowl streamed across seven continents, making history with over 10 million views in one week. Shot entirely in HD, this ground breaking concert was filmed with 28 cameras and directed by Tom Krueger who previously shot the concert film U23D. U2360° resumes in Europe in August with North American dates to follow in 2011.",
      "popularity": 0.84,
      "poster_path": "/6KNV7Idap9L7gxEKg0qACoqtWRm.jpg",
      "release_date": "2010-06-03",
      "title": "U2360° At the Rose Bowl",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [99],
      "id": 697694,
      "original_language": "en",
      "original_title": "What We Leave in Our Wake.",
      "overview": "What We Leave in Our Wake is a filmic essay which unfolds as a series of conversations on Ireland, exploring themes such as emigration, mythology, consumerism, socialism, the place of the church in Irish life, the central role of land in Irish history and the sense of a civic society. Combining images of contemporary Ireland with an evocative blend of archive, What We Leave in Our Wake questions what persists rather than the temporary fluctuations and trends, and talks to some of those uniquely placed to comment on how this country has evolved.",
      "popularity": 0.6,
      "poster_path": null,
      "release_date": "2010-11-14",
      "title": "What We Leave in Our Wake.",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [99, 10402],
      "id": 673664,
      "original_language": "en",
      "original_title": "HUMAN HEART",
      "overview": "Documentary on Claire Elise Boucher, known professionally as Grimes, as she navigates the dawn of her music career and the continuation of her collegiate career.",
      "popularity": 0.6,
      "poster_path": "/zoFT9a7jkLzxp2xc8pUnHiMyKae.jpg",
      "release_date": "2010-01-01",
      "title": "HUMAN HEART",
      "video": false,
      "vote_average": 10,
      "vote_count": 1
    }
  ];

  render() {
    return (
      <Fragment>
        {
          <div className="App">
            <ReactDataGridApp
              columns={columns}
              onFilterValueChange={this.onFilterValueChange}
              {...this.state}
            />
            {/* <PDFViewer className={classes.iFrameSize}>
              <PdfDocument data={this.data} />
            </PDFViewer> */}

          </div>
        }
      </Fragment>
    );
  }
}

export default withStyles(styles)(ReactDataGridContainer);
