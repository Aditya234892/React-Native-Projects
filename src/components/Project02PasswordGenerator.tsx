import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik, FormikProps} from 'formik';

interface FormValues {
    passwordLength: string;
  }

//Defining the shape of Schmema for Password
const PasswordSchema = Yup.object().shape({
  passwordLenght: Yup.number()
    .min(4, 'Should be min of 4 character')
    .max(4, 'Should be max of 16 character')
    .required('Length is required'),
});

export default function Project02PasswordGenerator() {
  const [password, setPassword] = useState<string>('');
  const [isPassGenerated, setIsPassGenerated] = useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(true);
  const [uppercase, setUppercase] = useState<boolean>(true);
  const [numbers, setNumbers] = useState<boolean>(true);
  const [symbols, setSymbols] = useState<boolean>(true);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitsChars = '0123456789';
    const specialChars = '`~!@#$%^&*()_+-=;:"[{]}],<.>/?|';

    if (uppercase) {
      characterList += uppercaseChars;
    }

    if (lowercase) {
      characterList += lowercaseChars;
    }

    if (numbers) {
      characterList += digitsChars;
    }

    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated((prev: boolean) => !prev);
  };

  const createPassword = (characters: string, passworrdLength: number) => {
    let res = '';
    for (let i = 0; i < passworrdLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      res += characters.charAt(characterIndex);
    }

    return res;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPassGenerated(false);
    setNumbers(false);
    setLowercase(true);
    setUppercase(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      {/* <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
        </View>
        <Formik<FormValues>
          initialValues={{passwordLength: ' '}}
         validationSchema={PasswordSchema}
         onSubmit={(values) => {
            console.log(values);
            generatePasswordString(Number(values.passwordLength))
         }}

          {({
            values,
            errors,
            isValid,
            handleChange,
            handleSubmit,
            isReset,
          }: FormikProps<FormValues>) => (
            <>
            <View style={styles.inputWrapper}>
              
            </View>
            <View style={styles.inputWrapper}>
            </View>
            <View style={styles.inputWrapper}>
            </View>
            <View style={styles.inputWrapper}>
            </View>
            <View style={styles.inputWrapper}>
            </View>

            <View style={styles.formAction}>
                <TouchableOpacity>
                    Generate Password
                </TouchableOpacity>
                <TouchableOpacity>
                    Reset
                </TouchableOpacity>
            </View>
            </>
        </Formik>
      </SafeAreaView> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
