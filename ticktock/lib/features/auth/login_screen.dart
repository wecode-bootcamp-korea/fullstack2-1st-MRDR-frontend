import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:ticktock/constants/gaps.dart';
import 'package:ticktock/constants/sizes.dart';
import 'package:ticktock/features/auth/email_username.dart';
import 'package:ticktock/features/auth/widgets/icon_button.dart';

class LoginScreen extends StatelessWidget {
  LoginScreen({super.key});

  void _onClickEmail(BuildContext context) {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) => const EmailUserName(),
      ),
    );
  }

  void _onClickSignUp(BuildContext context) {
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final mediumStyle = theme.textTheme.displayMedium;
    final smallStyle = theme.textTheme.displaySmall;
    final mediumThinStyle = mediumStyle!.copyWith(
      fontWeight: FontWeight.w400,
      fontSize: Sizes.size16,
    );
    final redThinStyle = mediumThinStyle!.copyWith(
      color: theme.primaryColor,
      fontWeight: FontWeight.w600,
    );

    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: Sizes.size48,
        ),
        child: SafeArea(
          child: Center(
            child: Column(
              children: [
                Gaps.v80,
                Text(
                  "Sign up for TikTok",
                  style: mediumStyle,
                  textAlign: TextAlign.center,
                ),
                Gaps.v20,
                Text(
                  "Manage your account, check notifications, comment on videos, and more",
                  style: smallStyle,
                  textAlign: TextAlign.center,
                ),
                Gaps.v24,
                AuthIconButton(
                    title: "User Email / username",
                    icon: const FaIcon(FontAwesomeIcons.person),
                    onClick: _onClickEmail),
                Gaps.v16,
                AuthIconButton(
                    title: "Continue with google",
                    icon: const FaIcon(FontAwesomeIcons.google),
                    onClick: _onClickEmail),
                Gaps.v16,
                AuthIconButton(
                    title: "Continue with facebook",
                    icon: const FaIcon(FontAwesomeIcons.facebook),
                    onClick: _onClickEmail)
              ],
            ),
          ),
        ),
      ),
      bottomNavigationBar: BottomAppBar(
        elevation: 1,
        color: Colors.grey.shade100,
        child: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: Sizes.size20,
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                "You want to login",
                style: mediumThinStyle,
              ),
              Gaps.h10,
              GestureDetector(
                onTap: () => _onClickSignUp(context),
                child: Text(
                  "Login",
                  style: redThinStyle,
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
