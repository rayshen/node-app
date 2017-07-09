/**
 * 此类方式只可用于静态页面渲染
 */
var React = require('react');
var Layout = require('./layout');

class Index extends React.Component {
    render() {
        return (
            <Layout title={this.props.title}>
                <h1>{this.props.title}</h1>
                <p>Welcome to {this.props.title}</p>
                <p>
                    time:{this.props.time}
                </p>
            </Layout>
        );
    }
}

Index.propTypes = {
  title: React.PropTypes.string
};

module.exports = Index;
