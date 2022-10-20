// import logo from './logo.svg';
// import './App.css';
import React from "react";

import thinkspeak from "../../api/thinkspeak";
import Chart  from "react-apexcharts";

class Graph extends React.Component 
{
    state = {data_response: {}, graph_data: [], categories_for_temp: [], series_for_temp: []};


    temp = {
        options: {
          chart: {
            id: "basic-line"
          },
          xaxis: {
            categories: ['October 10', 'October 10', 'October 10', 'October 10', 'October 10', 'October 10', 'October 10', 'October 10', 'October 14', 'October 14', 'October 15', 'October 15', 'October 17', 'October 17', 'October 19', 'October 19', 'October 19']
          }
        },
        series: [
          {
            name: "series-1",
            data: [0, 10, 30, 50, 100, 200, 200, [200, 1], 500, 1000, 1000, 0, 0, 0, 0, 0, 0]
          }
        ]
      };
    componentDidMount()
    {
        this.getData();
    }

    getData = async() => {

        
        const response = await thinkspeak.get('/feeds.json', {});
        console.log(response.data.feeds);
        this.setState({data_response: response.data.feeds});
        console.log(this.state)
        const graph_data_values = []
        for(let i = 0; i < this.state.data_response.length; i++)
        {
            console.log(this.state.data_response[i])
            const {created_at, field1} = this.state.data_response[i]
            if(field1 != null)
                graph_data_values.push({created_at, field1})

                
        }
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        
        console.log(this.state)
        console.log(graph_data_values);


        const graph_data_filtered = []
        const category_data = []
        const series_data = []
        for(let i = 0; i < graph_data_values.length; i++)
        {
            console.log(`sdad ${graph_data_values.created_at}`);
            let date_value_here = new Date(graph_data_values[i].created_at);
            // console.log(`date value here: ${date_value_here.toISOString().substring(0, 10)}`);
            const str = `${(months[date_value_here.getMonth()])} ${date_value_here.getDate()}`
            const val = parseInt(graph_data_values[i].field1)
            category_data.push(str);
            series_data.push(val);
            graph_data_filtered.push({str, val})

            console.log(str)
            // console.log(date_value_here.getFullYear()+'-' + (months[date_value_here.getMonth()]) + '-'+date_value_here.getDate());
          //   var date = new Date("2013-03-10T02:00:00Z");
          // date.toISOString().substring(0, 10);
          // Date.parse('01 Jan 1970 00:00:00 GMT');
        }
        console.log(category_data);
        console.log(series_data);
        this.setState({categories_for_temp: category_data})
        this.setState({series_for_temp: series_data})

        console.log(this.state)
        console.log(this.state.categories_for_temp);
        console.log(this.state.series_for_temp)

        
        for(let i = 0; i < graph_data_filtered.length; i++)
        {
          console.log(graph_data_filtered[i])
        }
    }

    render()
    {
        return(
        <div>
            TEri maa kli vhut
       
            <Chart
              options={this.temp.options}
              series={this.temp.series}
              type="line"
              width="500"
            />
            {/* {this.state} */}
        </div>
        )
    }
}

export default Graph;
