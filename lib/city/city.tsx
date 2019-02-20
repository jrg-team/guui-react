import * as React from 'react';
import {createScopedClasses} from 'utils/classes';
import * as ReactDOM from 'react-dom';
import './city.scss';
import {Input} from '../index';
import cities from './cities';
import {objectToArray} from 'utils/collection';

const citiesByLetter = objectToArray(cities)
  .sort((a, b) => a.key - b.key)
  .map(c => ({letter: c.key, cities: c.value}));

console.log(citiesByLetter);

const componentName = 'City';
const sc = createScopedClasses(componentName);

interface IProps extends IStyledProps {
}

interface IState {
  autoLocateFailed: boolean;
}

class City extends React.Component<IProps, IState> {
  static displayName = componentName;
  static defaultProps = {};
  static propTypes = {};

  constructor(props: IProps) {
    super(props);
    this.state = {
      autoLocateFailed: false
    };
    this.autoLocate();
  }

  autoLocate() {
    navigator.geolocation.getCurrentPosition((position: Position) => {
      console.log(position);
    }, () => {
      this.setState({
        autoLocateFailed: true
      });
    }, {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    });
  }

  onClickCity = () => {

  };
  letters = 'ABCDEFGHJKLMNPQRSTWXYZ'.split('');

  render() {
    return (
      <div>
        <div className={sc()} onClick={this.onClickCity}>北京</div>
        {
          ReactDOM.createPortal(
            <div className={sc('popupWrapper')}>
              <div className={sc('search')}>
                <Input after="搜索"/>
              </div>
              <div className={sc('autoLocate')}>
                {this.state.autoLocateFailed ?
                  '定位失败，请手动输入城市' :
                  '正在定位中，请稍候...'}
              </div>
              <div className={sc('hotCities')}>
                <h2>
                  热门城市
                </h2>
                <ul>
                  <li>北京</li>
                  <li>广州</li>
                  <li>深圳</li>
                  <li>上海</li>
                  <li>成都</li>
                  <li>武汉</li>
                  <li>哈尔滨</li>
                  <li>长沙</li>
                  <li>重庆</li>
                  <li>西安</li>
                  <li>郑州</li>
                  <li>天津</li>
                </ul>
              </div>
              <div className={sc('allCities')}>
                <h2>全部城市</h2>
                <div className={sc('letters')}>
                  <ol>
                    {this.letters.map(l => <li key={l}>{l}</li>)}
                  </ol>
                </div>
                <div className={sc('cities')}>
                  <ol>
                    {citiesByLetter.map(item => {
                      return (
                        <li key={item.letter}>
                          <h3 className={sc('letter')}>{item.letter}</h3>
                          <ul className={sc('citiesForLetter')}>
                            {item.cities.map((city: string) =>
                              <li className={sc('city')} key={city}>{city}</li>
                            )}
                          </ul>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>,
            document.body
          )
        }
      </div>
    );
  }
}

export default City;
