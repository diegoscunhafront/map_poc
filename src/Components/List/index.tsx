import type { CollapseProps } from 'antd';
import { Collapse, ConfigProvider } from 'antd';

const List = () => {

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Propriedade CAR Número 12345-6',
            children: 
                <ul style={{ padding: "0rem 2rem"}}>
                    <li>Produtividade: 25%</li>
                    <li>Pragas: 2%</li>
                    <li>Precipitação: 7%</li>
                </ul>,
        }, 
        {
            key: '2',
            label: 'Propriedade CAR Número 23456-7',
            children: 
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 2,5%</li>
                    <li>Pragas: 12%</li>
                    <li>Precipitação: 7,5%</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                </ul>,
        },
        {
            key: '3',
            label: 'Propriedade CAR Número 34567-8',
            children: 
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 0,5%</li>
                </ul>,
        },
        {
            key: '4',
            label: 'Propriedade CAR Número 12345-6',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 25%</li>
                    <li>Pragas: 2%</li>
                    <li>Precipitação: 7%</li>
                </ul>,
        },
        {
            key: '5',
            label: 'Propriedade CAR Número 23456-7',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 2,5%</li>
                    <li>Pragas: 12%</li>
                    <li>Precipitação: 7,5%</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                </ul>,
        },
        {
            key: '6',
            label: 'Propriedade CAR Número 34567-8',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 0,5%</li>
                </ul>,
        },
        {
            key: '7',
            label: 'Propriedade CAR Número 12345-6',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 25%</li>
                    <li>Pragas: 2%</li>
                    <li>Precipitação: 7%</li>
                </ul>,
        },
        {
            key: '8',
            label: 'Propriedade CAR Número 23456-7',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 2,5%</li>
                    <li>Pragas: 12%</li>
                    <li>Precipitação: 7,5%</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                </ul>,
        },
        {
            key: '9',
            label: 'Propriedade CAR Número 34567-8',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 0,5%</li>
                </ul>,
        },
        {
            key: '10',
            label: 'Propriedade CAR Número 12345-6',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 25%</li>
                    <li>Pragas: 2%</li>
                    <li>Precipitação: 7%</li>
                </ul>,
        },
        {
            key: '11',
            label: 'Propriedade CAR Número 23456-7',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 2,5%</li>
                    <li>Pragas: 12%</li>
                    <li>Precipitação: 7,5%</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                </ul>,
        },
        {
            key: '12',
            label: 'Propriedade CAR Número 34567-8',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 0,5%</li>
                </ul>,
        },
        {
            key: '13',
            label: 'Propriedade CAR Número 12345-6',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 25%</li>
                    <li>Pragas: 2%</li>
                    <li>Precipitação: 7%</li>
                </ul>,
        },
        {
            key: '14',
            label: 'Propriedade CAR Número 23456-7',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 2,5%</li>
                    <li>Pragas: 12%</li>
                    <li>Precipitação: 7,5%</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                    <li>Indice X:</li>
                </ul>,
        },
        {
            key: '15',
            label: 'Propriedade CAR Número 34567-8',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 0,5%</li>
                </ul>,
        },
        {
            key: '16',
            label: 'Propriedade CAR Número 34567-8',
            children:
                <ul style={{ padding: "0rem 2rem" }}>
                    <li>Produtividade: 0,5%</li>
                </ul>,
        },
    ];

    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <div style={{ width: "25%", height: "100%", backgroundColor: "rgba(211,211,211)", border: "4px solid #888", padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <div style={{ fontFamily: "Arial", width: "100%", height: "10%", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#bbb", borderRadius: "1rem 1rem 0px 0px", flexDirection: "column"}}>
                <p style={{  fontSize: "2rem" }}>Lista de propriedades</p>
                <p style={{ fontSize: "1rem" }}>Proprietário: Jeremias</p>
            </div>
            <div style={{ height: "90%", borderRadius: "0px 0px 1rem 1rem", backgroundColor: "rgba(255,255,255,0.8)", overflowY: "auto" }}>
                <ConfigProvider
                    theme={{
                        components: {
                            Collapse: {
                                borderRadiusLG: 0
                            }
                        }
                    }}
                >
                    <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
                </ConfigProvider>
            </div>
        </div>
    )
}

export default List