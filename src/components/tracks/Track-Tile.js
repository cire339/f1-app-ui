import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import flags from "../../images/flags";
import Image from "next/image";
import NextLink from "next/link";

export const TrackTile = (props) => {
    const countryName =  getCountryName(props.trackCode);
    const nextPageUrl = "/fastest-laps/" + countryName.toLowerCase();

    return (
        <NextLink
            href={nextPageUrl}
            passHref
            state={{ trackCode: props.trackCode}}
        >
            <Card
                sx={{ height: '100%',
                    '&:hover': {
                        backgroundColor: 'rgba(255,255,255, 0.08)'
                    } }}
                {...props}
            >
                <CardContent>
                    <Grid
                        container
                        spacing={3}
                        sx={{ justifyContent: 'space-between' }}
                    >
                        <Grid item
                              xl={4}
                              lg={4}
                              sm={8}
                              xs={16}>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                {countryName}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xl={4}
                            lg={4}
                            sm={8}
                            xs={16}
                        >
                            <Image
                                src={getFlagIcon(props.trackCode)}
                            />
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            pt: 2,
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <Typography
                            color="textSecondary"
                            variant="h7"
                        >
                            {getCircuitName(props.trackCode)}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </NextLink>
    );
}

const getCountryName = (trackCode) => {
    switch(trackCode) {
        case 'MELBOURNE':
            return 'Australia';
        case 'PAUL_RICARD':
            return 'France';
        case 'SHANGHAI':
            return 'China';
        case 'SAKHIR_BAHRAIN':
            return 'Bahrain';
        case 'CATALUNYA':
            return 'Spain';
        case 'MONACO':
            return 'Monaco';
        case 'MONTREAL':
            return 'Canada';
        case 'SILVERSTONE':
            return 'United Kingdom';
        case 'HOCKENHEIM':
            return 'Germany';
        case 'HUNGARORING':
            return 'Hungary';
        case 'SPA':
            return 'Belgium';
        case 'MONZA':
            return 'Italy (Monza)';
        case 'SINGAPORE':
            return 'Singapore';
        case 'SUZUKA':
            return 'Japan';
        case 'ABU_DHABI':
            return 'United Arab Emirates';
        case 'TEXAS':
            return 'United States';
        case 'BRAZIL':
            return 'Brazil';
        case 'AUSTRIA':
            return 'Austria';
        case 'SOCHI':
            return 'Russia';
        case 'MEXICO':
            return 'Mexico';
        case 'BAKU_AZERBAIJAN':
            return 'Azerbaijan';
        case 'SAKHIR_SHORT':
            return 'Bahrain (Short)';
        case 'SILVERSTONE_SHORT':
            return 'United Kingdom (Short)';
        case 'TEXAS_SHORT':
            return 'United States (Short)';
        case 'SUZUKA_SHORT':
            return 'Japan (Short)';
        case 'HANOI':
            return 'Vietnam';
        case 'ZANDVOORT':
            return 'Netherlands';
        case 'IMOLA':
            return 'Italy (Imola)';
        case 'PORTIMAO':
            return 'Portugal';
        case 'JEDDAH':
            return 'Saudi Arabia';
        default:
            return 'N/A';
    }
};

const getCircuitName = (trackCode) => {
    switch(trackCode) {
        case 'MELBOURNE':
            return 'Albert Park Circuit, Melbourne';
        case 'PAUL_RICARD':
            return 'Circuit Paul Ricard, Le Castellet';
        case 'SHANGHAI':
            return 'Shanghai International Circuit, Shanghai';
        case 'SAKHIR_BAHRAIN':
            return 'Bahrain International Circuit, Sakhir';
        case 'CATALUNYA':
            return 'Circuit de Barcelona-Catalunya, Montmeló';
        case 'MONACO':
            return 'Circuit de Monaco, Monaco';
        case 'MONTREAL':
            return 'Circuit Gilles-Villeneuve, Montreal, Quebec';
        case 'SILVERSTONE':
            return 'Silverstone Circuit, Silverstone';
        case 'HOCKENHEIM':
            return 'Hockenheimring, Hockenheim';
        case 'HUNGARORING':
            return 'Hungaroring, Mogyoród';
        case 'SPA':
            return 'Circuit de Spa-Francorchamps, Francorchamps';
        case 'MONZA':
            return 'Autodromo Nazionale Monza, Monza';
        case 'SINGAPORE':
            return 'Marina Bay Street Circuit, Singapore';
        case 'SUZUKA':
            return 'Suzuka Circuit, Suzuka, Mie';
        case 'ABU_DHABI':
            return 'Yas Marina Circuit, Abu Dahbi';
        case 'TEXAS':
            return 'Circuit of the Americas, Austin, Texas';
        case 'BRAZIL':
            return 'Autódromo José Carlos Pace, São Paulo';
        case 'AUSTRIA':
            return 'Red Bull Ring, Spielberg, Styria';
        case 'SOCHI':
            return 'Sochi Autodrom, Aldersky';
        case 'MEXICO':
            return 'Autódromo Hermanos Rodríguez, Mexico City';
        case 'BAKU_AZERBAIJAN':
            return 'Baku City Circuit, Baku';
        case 'SAKHIR_SHORT':
            return 'Bahrain International Circuit, Sakhir';
        case 'SILVERSTONE_SHORT':
            return 'Silverstone Circuit, Silverstone';
        case 'TEXAS_SHORT':
            return 'Circuit of the Americas, Austin, Texas';
        case 'SUZUKA_SHORT':
            return 'Suzuka Circuit, Suzuka, Mie';
        case 'HANOI':
            return 'Hanoi Street Circuit, Hanoi';
        case 'ZANDVOORT':
            return 'Circuit Park Zandvoort, Zandvoort';
        case 'IMOLA':
            return 'Autodromo Enzo e Dino Ferrari, Imola';
        case 'PORTIMAO':
            return 'Algarve International Circuit, Portimão';
        case 'JEDDAH':
            return 'Jeddah Street Circuit, Jeddah';
        default:
            return 'N/A';
    }
};

const getFlagIcon = (trackCode) => {
    switch(trackCode) {
        case 'MELBOURNE':
            return flags.AustraliaFlag;
        case 'PAUL_RICARD':
            return flags.FranceFlag;
        case 'SHANGHAI':
            return flags.ChinaFlag;
        case 'SAKHIR_BAHRAIN':
            return flags.BahrainFlag;
        case 'CATALUNYA':
            return flags.SpainFlag;
        case 'MONACO':
            return flags.MonacoFlag;
        case 'MONTREAL':
            return flags.CanadaFlag;
        case 'SILVERSTONE':
            return flags.BritishFlag;
        case 'HOCKENHEIM':
            return flags.GermanyFlag;
        case 'HUNGARORING':
            return flags.HungaryFlag;
        case 'SPA':
            return flags.BelgiumFlag;
        case 'MONZA':
            return flags.ItalyFlag;
        case 'SINGAPORE':
            return flags.SingaporeFlag;
        case 'SUZUKA':
            return flags.JapanFlag;
        case 'ABU_DHABI':
            return flags.UnitedArabEmiratesFlag;
        case 'TEXAS':
            return flags.UnitedStatesFlag;
        case 'BRAZIL':
            return flags.BrazilFlag;
        case 'AUSTRIA':
            return flags.AustriaFlag;
        case 'SOCHI':
            return flags.RussiaFlag;
        case 'MEXICO':
            return flags.MexicoFlag;
        case 'BAKU_AZERBAIJAN':
            return flags.AzerbaijanFlag;
        case 'SAKHIR_SHORT':
            return flags.BahrainFlag;
        case 'SILVERSTONE_SHORT':
            return flags.BritishFlag;
        case 'TEXAS_SHORT':
            return flags.UnitedStatesFlag;
        case 'SUZUKA_SHORT':
            return flags.JapanFlag;
        case 'HANOI':
            return flags.VietnamFlag;
        case 'ZANDVOORT':
            return flags.NetherlandsFlag;
        case 'IMOLA':
            return flags.ItalyFlag;
        case 'PORTIMAO':
            return flags.PortugalFlag;
        case 'JEDDAH':
            return flags.SaudiArabiaFlag;
        default:
            return flags.UnknownFlag;
    }
};