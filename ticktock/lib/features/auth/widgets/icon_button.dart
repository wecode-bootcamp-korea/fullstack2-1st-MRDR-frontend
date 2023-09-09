import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:ticktock/constants/sizes.dart';

class AuthIconButton extends StatelessWidget {
  final String title;
  final FaIcon icon;
  final void Function(BuildContext) onClick;

  const AuthIconButton({
    super.key,
    required this.title,
    required this.icon,
    required this.onClick,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => onClick(context),
      child: FractionallySizedBox(
        widthFactor: 1,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(
              Sizes.size4,
            ),
            border: Border.all(
              color: Colors.grey.shade300,
              width: Sizes.size1,
            ),
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(
              horizontal: Sizes.size5,
              vertical: Sizes.size10,
            ),
            child: Stack(
              alignment: Alignment.center,
              children: [
                Align(
                  alignment: Alignment.centerLeft,
                  child: icon,
                ),
                Text(
                  title,
                  style: Theme.of(context).textTheme.labelLarge,
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
