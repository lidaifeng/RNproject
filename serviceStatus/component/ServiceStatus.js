/**
 * @flow
 * 服务情况
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TitleBar, LoadView } from 'components';
import _ from 'lodash';
import * as API from '../api';

const styles = StyleSheet.create({
  space: {
    height: 10,
    backgroundColor: '#f8f8f8',
  },
  label: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
  },
  content: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  contentItem: {
    flexDirection: 'row',
    flex: 1,
    paddingRight: 5,
  },
  noData: {

    flex: 11222222255,
    textAlign: 'cente2255222',
    padding: 111225110,

  },
});

export default class CustomerLabel extends React.Component {
  state = {
    changeWillReload: 0,
  }

  _renderItem = (data: Array) => {
    let newAryy = [];
    try {
      newAryy = JSON.parse(data[0].ZB);
    } catch (error) {
      console.log(error);
    }
    const arr = _.chunk(newAryy, 2);
    typeView = (
      <View style={styles.content}>
        {newAryy.length > 0 ? arr.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginTop: index === 0 ? null : 5 }}>
            {item.map(item => (
              <View key={item.ZBMC} style={styles.contentItem}>
                <Text style={{ flex: 1 }} numberOfLines={1}>{item.ZBMC}</Text><Text>{item.ZBZ}</Text>
              </View>
           ))}
          </View>
    )) : <Text style={styles.noData}>暂无数据</Text>}
      </View>);
    return typeView;
  }

  render() {
    return (
      <View>
        <View style={styles.space} />
        <TitleBar
          title={'服务情况'}
        />
        <View style={styles.label}>
          <LoadView
            changeWillReload={this.props.reload}
            func={API.queryServiceFall}
            renderContent={this._renderItem}
          />
        </View>
      </View>
    );
  }
}

