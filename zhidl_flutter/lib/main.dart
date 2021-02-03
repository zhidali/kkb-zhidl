import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }
  @override
  void diapose() {
    super.dispose();
    _controller.diapose();
  }




  int currentIndex = 0;
  list<Widget> pages = [
    Center(child:Text('首页')),
    Center(child:Text('发现')),
    Center(child:Text('我的'))
  ]
  PageController _controller;
  
  @override
  void initState() {
    super.initState();
    _controller = PageController(initialPage:0)
  }
  @override
  Widget build(BuildContext context) {
    // 暗号：我要涨薪
    return Scaffold(
      body: PageView(
        Controller :_controller,
        physics: NeverScroll
      ),
      bottomNavigationBar: BorromNavigationBar(
        currentIndex: currentIndex,
        onTap:(int index) {
          setState(() {
            currentIndex = index;
            _controller.jumpToPage(index);
          });
        },
        item: [
          BorromNavigationBarItem(icon: Icon(Icon.home), label: '首页'),
          BorromNavigationBarItem(icon: Icon(Icon.home), label: '发现'),
          BorromNavigationBarItem(icon: Icon(Icon.home), label: '我的')

        ]
      )
    );
  }
}
