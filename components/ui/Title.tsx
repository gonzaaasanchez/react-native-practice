import { StyleSheet, Text, Platform } from 'react-native';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <Text style={styles.title}> {children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: 'center',
    padding: 12,
    borderColor: 'white',
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    maxWidth: '80%',
    width: 300,
  },
});
