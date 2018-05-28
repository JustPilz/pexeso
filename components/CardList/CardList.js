import React from 'react';
import { Button, View, Image } from 'react-native';
//import { Audio } from 'expo';
import Card from '@Components/Card/Card';

export default class CardList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      lastName: null,
      lastCardId: null,
      count: 0,
      score: 0
    };
    console.log('CardList constructor')
    this.pairNumber = 14;

    //this.sound = {
    //  flip:  require('@Audio/flipCard.mp3'),
    //  complete: require('@Audio/CompletedSound.mp3')
    //}

    //this.imagesPath = {
    //  java:         require('@Cards/java.png'        ),
    //  javascript:   require('@Cards/javascript.png'  ),
    //  kotlin:       require('@Cards/kotlin.png'      ),
    //  lua:          require('@Cards/lua.png'         ),
    //  matlab:       require('@Cards/matlab.png'      ),
    //  ocaml:        require('@Cards/ocaml.png'       ),
    //  perl:         require('@Cards/perl.png'        ),
    //  powershell:   require('@Cards/powershell.png'  ),
    //  python:       require('@Cards/python.png'      ),
    //  ruby:         require('@Cards/ruby.png'        ),
    //  rust:         require('@Cards/rust.png'        ),
    //  scala:        require('@Cards/scala.png'       ),
    //  swift:        require('@Cards/swift.png'       ),
    //  wolfram:      require('@Cards/wolfram.png'     ),
    //  bash:         require('@Cards/bash.png'        ),
    //  c:            require('@Cards/c.png'           ),
    //  coffeescript: require('@Cards/coffeescript.png'),
    //  cpp:          require('@Cards/cpp.png'         ),
    //  crystal:      require('@Cards/crystal.png'     ),
    //  csharp:       require('@Cards/csharp.png'      ),
    //  dart:         require('@Cards/dart.png'        ),
    //  elixir:       require('@Cards/elixir.png'      ),
    //  fsharp:       require('@Cards/fsharp.png'      ),
    //  git:          require('@Cards/git.png'         ),
    //  go:           require('@Cards/go.png'          ),
    //  haskell:      require('@Cards/haskell.png'     ),
    //  haxe:         require('@Cards/haxe.png'        ),
    //};
    //
    this.source = require('@Cards/cards.png');
    this.imagesPos = {
      bash:         0,
      c:            75,
      coffeescript: 150,
      cpp:          225,
      crystal:      300,
      csharp:       375,
      dart:         450,
      elixir:       525,
      fsharp:       600,
      git:          675,
      go:           750,
      haskell:      825,
      haxe:         900,
      java:         975,
      javascript:   1050,
      kotlin:       1125,
      lua:          1200,
      matlab:       1275,
      ocaml:        1350,
      perl:         1425,
      powershell:   1500,
      python:       1575,
      ruby:         1650,
      rust:         1725,
      scala:        1800,
      swift:        1875,
      wolfram:      1950,
    };
  }

  randomInteger = (min, max) => {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
    return array;
  }

  genCardsList = (cards) => {
    let tempCards = cards.slice(0);
    let newCards = [];
    for (i = 0; i < this.pairNumber; i++) {
      let rand = this.randomInteger(0, tempCards.length-1);
      newCards.push(tempCards[rand]);
      tempCards.splice(rand, 1);
    }
    newCards = newCards.concat(newCards);
    return this.shuffleArray(newCards);
  }

  //playSound = async (audio = 'flip') => {
  //  await Audio.setIsEnabledAsync(true);
  //  let track = this.sound[audio];
  //  const sound = new Audio.Sound();
  //  try {
  //    await sound.loadAsync(track);
  //    await sound.playAsync();
  //  } catch (error) {
  //    console.error("playSound", audio, track);
  //  }
  //};

  componentDidMount() {
    const cards = [
      "bash",
      "c",
      "coffeescript",
      "cpp",
      "crystal",
      "csharp",
      "dart",
      "elixir",
      "fsharp",
      "git",
      "go",
      "haskell",
      "haxe",
      "java",
      "javascript",
      "kotlin",
      "lua",
      "matlab",
      "ocaml",
      "perl",
      "powershell",
      "python",
      "ruby",
      "rust",
      "scala",
      "swift",
      "wolfram"
    ];

    const tiles = this.genCardsList(cards).map((card, i) => {
      return { name: card, id: i, opened: false };
    })

    this.setState({ tiles });

    //setTimeout(() => {
    //  tiles.forEach((card) => {
    //    card.opened = false;
    //  })
    //  this.setState({
    //    tiles
    //  })
    //}, 0)

  }
/*
  onClick = (card) => {
    let tiles = this.state.tiles;
    this.state.tiles[card.id].opened = !tiles[card.id].opened;
    this.setState({
      tiles
    })
  }
*/

  onClick = (card) => {

    if(card.opened || this.state.count >= 2) return;

    let { lastName, lastCardId, count, score } = this.state;
    let _count = count;

    let tiles = [...this.state.tiles];

    let _lastName, _lastCardId;

    if(_count < 1) {
      _lastName = card.name;
    }

    if(_count < 2 && lastCardId != card.id) {
      _lastCardId = card.id;
      _count++;
      tiles[card.id].opened = true;
      //this.playSound('flip');
    }

    if(_count == 2) {
      if(lastName == card.name){
        //this.playSound('complete');
        _lastCardId = null;
        _lastName = null;
        _count = 0;
        tiles[card.id].opened = true;
      } else {
        setTimeout(() => {
          //this.playSound('flip');
          tiles[lastCardId].opened = false;
          tiles[card.id].opened = false;
          _lastName = null;
          _lastCardId = null;
          _count = 0;
          this.setState({
            tiles,
            lastName: _lastName,
            lastCardId: _lastCardId,
            count: _count,
          })
        }, 1200)
      }
    }

    this.setState({
      tiles,
      lastName: _lastName,
      lastCardId: _lastCardId,
      count: _count,
    })
  }

  render() {
    console.log('render CardList')
    const tiles = this.state.tiles && this.state.tiles.map((item, i) => {
      return <Card
        key={i}
        item={item}
        onClick={this.onClick}
        imagesPos={this.imagesPos[item.name]}
        source={this.source}
      />
    });

    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row', marginTop: 30 }}>
            {tiles}
           </View>
  }
}
