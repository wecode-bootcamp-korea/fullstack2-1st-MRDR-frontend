import 'package:flutter/material.dart';
import 'package:ticktock/constants/gaps.dart';
import 'package:ticktock/constants/sizes.dart';

class EmailUserName extends StatefulWidget {
  const EmailUserName({super.key});

  @override
  State<EmailUserName> createState() => _EmailUserNameState();
}

class _EmailUserNameState extends State<EmailUserName> {
  TextEditingController _textController = TextEditingController();

  String text = "";

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _textController.addListener(
      () {
        setState(() {
          text = _textController.text;
        });
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final mediumStyle = theme.textTheme.displayMedium;
    final smallStyle = theme.textTheme.displaySmall;
    final semiLargeStyle = theme.textTheme.labelLarge!.copyWith(
      fontSize: Sizes.size20,
      color: text.isEmpty //
          ? Colors.grey.shade400
          : Colors.white,
    );

    return Scaffold(
      appBar: AppBar(
        title: const Text("Sign Up"),
      ),
      body: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: Sizes.size28,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Gaps.v20,
            Text(
              "Create username",
              style: mediumStyle,
            ),
            Gaps.v10,
            Text(
              "you can always change later",
              style: smallStyle,
            ),
            Gaps.v28,
            TextField(
              controller: _textController,
              cursorColor: theme.primaryColor,
              decoration: InputDecoration(
                enabledBorder: UnderlineInputBorder(
                  borderSide: BorderSide(
                    color: Colors.grey.shade700,
                  ),
                ),
                focusedBorder: UnderlineInputBorder(
                  borderSide: BorderSide(
                    color: Colors.grey.shade700,
                  ),
                ),
              ),
            ),
            Gaps.v32,
            FractionallySizedBox(
              child: AnimatedContainer(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(
                    Sizes.size5,
                  ),
                  color: text.isEmpty //
                      ? Colors.grey.shade100
                      : theme.primaryColor,
                ),
                duration: const Duration(
                  milliseconds: 300,
                ),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      AnimatedDefaultTextStyle(
                        duration: const Duration(
                          milliseconds: 300,
                        ),
                        style: semiLargeStyle,
                        child: const Text(
                          "Next",
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
