import 'package:flutter/material.dart';
import 'package:ticktock/constants/sizes.dart';
import 'package:ticktock/features/auth/sign_up_screen.dart';

void main() {
  runApp(const TickTockApp());
}

class TickTockApp extends StatelessWidget {
  const TickTockApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'TickTock clone',
        theme: ThemeData(
          scaffoldBackgroundColor: Colors.white,
          appBarTheme: const AppBarTheme(
              elevation: 0,
              foregroundColor: Colors.black,
              backgroundColor: Colors.white,
              titleTextStyle: TextStyle(
                fontSize: Sizes.size32,
                fontWeight: FontWeight.w700,
              )),
          textTheme: TextTheme(
            labelLarge: const TextStyle(
              fontSize: Sizes.size14,
            ),
            displayMedium: const TextStyle(
              fontSize: Sizes.size24,
              fontWeight: FontWeight.w700,
              color: Colors.black87,
            ),
            displaySmall: TextStyle(
              fontSize: Sizes.size16,
              color: Colors.grey.shade500,
            ),
          ),
          primaryColor: const Color(0xFFE9435A),
        ),
        home: SignUpScreen());
  }
}
