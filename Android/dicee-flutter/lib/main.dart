import 'dart:math';

import 'package:flutter/material.dart';

void main() {
  return runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(
          title: Text('Dicee'),
          backgroundColor: Colors.red,
        ),
        body: DicePage(),
      ),
    ),
  );
}

class DicePage extends StatefulWidget {
  @override
  _DicePageState createState() => _DicePageState();
}

class _DicePageState extends State<DicePage> {
  int leftDiceNumber = 1, rightDiceNumber = 1;

  void randomDice(){
    leftDiceNumber = 1 +  Random().nextInt(6);
    rightDiceNumber = 1 +  Random().nextInt(6);

  }
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        children: <Widget>[
          Expanded(
              child: FlatButton(
                onPressed: (){
                  setState(() {
                    randomDice();
                    print('Left button pressed $leftDiceNumber');
                  });
                },
                child: Image.asset('images/dice$leftDiceNumber.png'),
              )
          ),
          Expanded(
              child: FlatButton(
                onPressed: (){
                  setState(() {
                    randomDice();
                    print('Right button pressed $leftDiceNumber');
                  });
                },
                child: Image.asset('images/dice$rightDiceNumber.png'),
              )
          )
        ],
      ),
    );
  }
}


