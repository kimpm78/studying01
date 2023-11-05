import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

// 지속가능한 파라미터를 만듬
// 리턴값으로 새로운 약속을 해결 하는 파라미터를 생성해 setTimeout 화살표 함수에 해결값과 지속값을 지정
function sleep(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function ComboBox() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); //For demo purposes.

      if (active) {
        setOptions([...top100Anime]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-Test"
      sx={{ width: 450 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="人気のアニメ"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

// Top 100 Anime as rated by IMDb users. @https://akiba-souken.com/anime/ranking/
const top100Anime = [
  {
    label: "しーくれっとみっしょん～潜入捜査官は絶対に負けない！～",
    year: 2023,
  },
  {
    label: "THE MARGINAL SERVICE",
    year: 2023,
  },
  {
    label: "カミエラビ",
    year: 2023,
  },
  {
    label: "ワンパンマン(第3期)",
    year: 2023,
  },
  {
    label: "はめつのおうこく",
    year: 2023,
  },
  {
    label: "葬送のフリーレン",
    year: 2023,
  },
  {
    label: "薬屋のひとりごと",
    year: 2023,
  },
  {
    label: "転生したらスライムだった件 コリウスの夢",
    year: 2023,
  },
  {
    label: "攻略うぉんてっど！～異世界救います！？～",
    year: 2023,
  },
  {
    label: "アンデッドアンラック",
    year: 2023,
  },
];
