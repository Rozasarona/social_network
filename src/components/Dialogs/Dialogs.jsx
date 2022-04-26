import s from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + '' + s.activeItem}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Petya
                </div>
                <div className={s.dialog}>
                    Rinat
                </div>
                <div className={s.dialog}>
                    Gloriya
                </div>
                <div className={s.dialog}>
                    Zahar
                </div>                
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Pruvet</div>
                <div className={s.message}>Kak dela?</div>
            </div>
        </div>
    );
}

export default Dialogs;